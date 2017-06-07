import { ModuleWithProviders, Type, Component, NgModule } from '@angular/core'
import { UIGuide, ResolvedUIGuideSandbox, UIGuideExample } from './interfaces'
const flatten = require('lodash.flatten')

export function getModuleForUIGuides(
  givenModule: Type<any>,
  uiGuides: UIGuide[],
  ngModuleImports: Type<any>[] = []
): ResolvedUIGuideSandbox {

  const componentsWithIds: {id: string, component: Type<any>}[] = flatten(uiGuides.map((uiGuide => uiGuide.examples.map((ex => {
    return {
      id: ex.id,
      component: generateComponent(ex)
    }
  })))))

  console.log('components with ids', componentsWithIds)

  const components = componentsWithIds.reduce((all, next) => {
    return Object.assign({}, all, {
      [next.id]: next.component
    })
  }, {})

  ngModuleImports.push(givenModule)
  const ngModule = generateNgModule(ngModuleImports, componentsWithIds.map(e => e.component))
  return {ngModule, components}
}

export function generateComponent(
  example: UIGuideExample
): Type<any> {
  @Component({
    template: example.template,
    styles: example.styles,
    providers: example.providers || []
  })
  class UIGuideExampleComponent {
    constructor() {
      Object.assign(this, example.context || {})
    }
  }

  return UIGuideExampleComponent
}

export function generateNgModule(
  givenModules: Type<any>[],
  components: Type<any>[]
): Type<any> {
  @NgModule({
    imports: givenModules,
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
