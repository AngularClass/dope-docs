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
  selector: 'ui-guide-renderer',
  template: `
    <div class="example row middle-xs">
      <div class="title">
        <h2>{{example.uiGuideName}} : {{example.name}}</h2>
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
      height: 100%;
    }
    .title {
      margin-bottom: 3rem;
    }
    .title * {
      font-size: 3.5rem;
      font-weight: 500;
    }
    .description {
      margin-bottom: 3rem;
    }
    .description p {
      font-size: 1.5rem;
      font-weight: 300;
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
export class UIGuideRendererComponent implements OnDestroy {
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

  @Input() set exampleId(id: string) {
    if (!id || typeof id !== 'string') {
      return
    }

    this.refresh()
    this.example = this.uiGuideService.getUIGuideExample(id)

    const {factory, injector} = this.sandboxService.compilerUIGuide(id, this.injector)
    this.ref = this.exampleConatiner.createComponent(factory, 0, injector, [])
  }

  ngOnDestroy() {
    this.refresh()
  }
}
