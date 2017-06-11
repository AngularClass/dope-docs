import { UIGuideSandboxService, UIGuideSerivce } from '../services'
import { UIGuideExample } from '../interfaces'
import { sizes, fonts } from '../styles'
import {
  Component,
  ComponentRef,
  Injector,
  Input,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core'

@Component({
  selector: 'ui-example',
  template: `
    <div class="example">
      <div class="title">
        <h2>{{example.name}}</h2>
      </div>
      <div class="description">
        <p>{{example.description}}</p>
      </div>
      <div class="example-component">
        <div #uiGuideExample></div>
      </div>
      <div class="source" *ngIf="example.showSource">
        <prism-block
          *ngIf="example.context"
          [code]="generateClassCode(example.context)"
          language="typescript">
        </prism-block>
        <prism-block
          [code]="generateTemplateCode(example.template)"
          language="html">
        </prism-block>
      </div>
    </div>
  `,
  styles: [`
    .example {
      flex-direction: column;
    }
    .title {
      margin-bottom: 3rem;
    }
    .title * {
      font-size: ${fonts.sizes.large};
      font-weight: ${fonts.thickness.light};
    }
    .description {
      margin-bottom: 3rem;
    }
    .description p {
      font-size: ${fonts.sizes.regular};
      font-weight: 100;
    }
    .source {
      font-size: ${fonts.sizes.regular};
    }
    .example-component {
      margin-bottom: 3rem;
    }
  `]
})
export class UIExampleComponent implements OnDestroy {
  example: UIGuideExample = {id: '', description: '', name: '', uiGuideName: '', template: ''}
  private ref: ComponentRef<any>

  @ViewChild('uiGuideExample', {read: ViewContainerRef})
  public exampleConatiner: ViewContainerRef

  constructor(
    private sandboxService: UIGuideSandboxService,
    private uiGuideService: UIGuideSerivce,
    private injector: Injector
  ) {}

  private refresh() {
    if (this.ref) {
      this.ref.destroy()
      this.ref = null
    }
  }

  @Input() set guideExample(example: UIGuideExample) {
    if (!example) {
      return
    }

    this.refresh()
    this.example = example
    const {factory, injector} = this.sandboxService.compilerUIGuide(example.id, this.injector)
    this.ref = this.exampleConatiner.createComponent(factory, 0, injector, [])
  }

  generateClassCode(context: any) {
    const contextString = Object.keys(context).reduce((final, next) => {
      let value = context[next]
      if (value) {
        value = value.toString()
      }
      return final += `  ${next} = ${value}\n`
    }, '\n')

    return `/* host component class */\nclass HostComponent {${contextString}}`
  }

  generateTemplateCode(template: string) {
    const templateList = template.split('\n')
    const baseSpaceCount = templateList[0].search(/\S/)

    const formattedTemplate = templateList.reduce((final, next) => {
      const spaces = next.search(/\S/)
      const diff = baseSpaceCount - spaces
      let s = next.trim()

      if (diff && diff > 0) {
        s = new Array(diff + 1) + s
      }
      final += s + '\n'
      return final
    }, '\n')
    return `<!-- host component template -->\n${template}`
  }


  ngOnDestroy() {
    this.refresh()
  }
}
