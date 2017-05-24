import { UIGuideSandbox, UIGuide, UIGuideExample, UIGuideExampleConfig, ComponentAPI, DopeDoc } from './interfaces'
import { bootstrap } from './boostrap'
const slugify = require('slugify')

export function createDopeDocs(sandbox: UIGuideSandbox) {
  bootstrap(sandbox)
}

const GuideIDS: {[id: string]: string[]} = {}

export class DocsBuilder implements DopeDoc {
  id: string
  examples: UIGuideExample[] = []

  constructor(public name: string, public description: string, public api: ComponentAPI) {
    const id = slugify(name).toLowerCase()

    if (GuideIDS[id]) {
      throw new Error(`You already have a UI Guide with the name of ${name}`)
    }

    GuideIDS[id] = []
    this.id = id
  }

  example(name: string, config: UIGuideExampleConfig): DopeDoc {
    const id = `${this.id}-${slugify(name).toLowerCase()}`

    if (GuideIDS[this.id].find(i => i === id)) {
      throw new Error(`You already have an example for UI Guide ${this.name} with the name of ${name}`)
    }

    GuideIDS[this.id].push(id)

    this.examples.push({
      id,
      name,
      providers: config.providers || [],
      showSource: Boolean(config.showSource),
      uiGuideName: this.name,
      description: config.description,
      template: config.template,
      context: config.context,
      styles: config.styles
    })

    return this
  }

  xexample(description: string, config: UIGuideExampleConfig): DopeDoc {
    return this
  }

  Xexample(description: string, config: UIGuideExampleConfig): DopeDoc {
    return this.xexample(description, config)
  }
}

export function docsFor(
  component: string,
  description: string,
  api: ComponentAPI
): DopeDoc {
  return new DocsBuilder(component, description, api)
}
