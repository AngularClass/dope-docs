import { UIGuideSandboxService, UIGuideSerivce } from '../services'
import { UIGuideExample } from '../interfaces'
import { UIGuide } from '../interfaces'
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
  selector: 'ui-guide',
  template: `
    <div class="guide">
      <div class="guide-text">
        <div class="title">
          <h2>{{guide.name}}</h2>
        </div>
        <div class="guide-description">
          <p>{{guide.description}}</p>
        </div>
      </div>
      <div class="example" *ngFor="let example of guide.examples">
        <ui-example [guideExample]="example"></ui-example>
      </div>
      <div class="api">
        <ui-api [api]="guide.api"></ui-api>
      </div>
    </div>
  `,
  styles: [`
    .guide {
      margin: 0px !important;
      padding: 2rem 3.5rem;
    }  
    .example, .guide-text {
      margin-bottom: 5rem;
    }
    .title, .api {
      margin-bottom: 2rem;
    }
    .title {
      font-size: 3.5rem;
      font-weight: lighter;
    }
    .guide-description {
      font-size: 1.5rem;
    }
  `]
})
export class UIGuideComponent {
  guide: UIGuide = {id: '', name: '', examples: [], description: '', api: {inputs: [], outputs: []}}
  
  constructor(
    private sandboxService: UIGuideSandboxService,
    private uiGuideService: UIGuideSerivce
  ) {}


  @Input() set guideId(id: string) {
    if (!id || typeof id !== 'string') {
      return
    }
    this.guide = this.uiGuideService.getUIGuide(id)
  }
}
