import { UIGuideSandboxService, UIGuideSerivce } from '../services'
import { UIGuideExample } from '../interfaces'
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
    <div class="example row">
      <div class="title">
        <h2>{{example.name}}</h2>
      </div>
      <div class="description">
        <p>{{example.description}}</p>
      </div>
      <div class="example-component">
        <div #uiGuideExample></div>
      </div>
      <div class="source html" *ngIf="example.showSource">
        <pre><code>{{example.template}}</code></pre>
      </div>
    </div>
  `,
  styles: [`
    .example {
      flex-direction: column;
      padding-left: 4rem;
      padding-top: 1.5rem;
    }
    .title {
      margin-bottom: 3rem;
    }
    .title * {
      font-size: 3.5rem;
      font-weight: 300;
    }
    .description {
      margin-bottom: 3rem;
    }
    .description p {
      font-size: 1.5rem;
      font-weight: 100;
    }
    .source {
      font-size: 1.5rem;
      background-color: #efefef;
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

  ngOnDestroy() {
    this.refresh()
  }
}
