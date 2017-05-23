import { ModuleWithProviders, Type, Component, NgModule } from '@angular/core'
import { UIGuide, ResolvedUIGuideSandbox, UIGuideExample } from './interfaces'
const flatten = require('lodash.flatten')

export function getModuleForUIGuides(
  giventModule: ModuleWithProviders | Type<any>,
  uiGuides: UIGuide[]
): ResolvedUIGuideSandbox {

  const componentsWithIds: {id: string, component: Type<any>}[] = flatten(uiGuides.map((uiGuide => uiGuide.examples.map((ex => {
    return {
      id: ex.id,
      component: generateComponent(ex)
    }
  })))))

  const components = componentsWithIds.reduce((all, next) => {
    return Object.assign({}, all, {
      [next.id]: next.component
    })
  }, {})

  const ngModule = generateNgModule(giventModule, componentsWithIds.map(e => e.component))
  return {ngModule, components}
}

export function generateComponent(
  example: UIGuideExample
): Type<any> {
  @Component({
    template: example.template,
    styles: example.styles
  })
  class UIGuideExampleComponent {
    constructor() {
      Object.assign(this, example.context || {})
    }
  }

  return UIGuideExampleComponent
}

export function generateNgModule(
  giventModule: ModuleWithProviders | Type<any>,
  components: Type<any>[]
): Type<any> {
  @NgModule({
    imports: [
      giventModule
    ],
    declarations: [
      ...components
    ],
    entryComponents: [
      ...components
    ]
  })
  class UIGuideNgModule {}

  return UIGuideNgModule
}
