import { UIGuideSandbox, UIGuide, UIGuideExample, UIGuideExampleConfig } from './interfaces'
import { bootstrap } from './boostrap'


export function createUIGuideSandbox(sandbox: UIGuideSandbox) {
  bootstrap(sandbox)
}

export class UIGuideBuilder implements UIGuide {
  id: string
  examples: UIGuideExample[]
  private callCount: number = 0

  constructor(public name: string, public module?: NodeModule) {
    this.id = `example${module ? module.id : ''}`
  }

  example(description: string, config: UIGuideExampleConfig): this {
    this.examples.push({
      id: `${this.id}-${++this.callCount}`,
      description,
      template: config.template,
      context: config.context,
      styles: config.styles
    })

    return this
  }

  xexample(description: string, config: UIGuideExampleConfig){
    return this
  }

  Xexample(description: string, config: UIGuideExampleConfig) {
    return this.xexample(description, config)
  }
}

export function uiGuideOn(component: string, module?: NodeModule): UIGuideBuilder {
  return new UIGuideBuilder(component, module)
}
