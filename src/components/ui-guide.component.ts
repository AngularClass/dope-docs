import { UIGuideSandboxService, UIGuideSerivce } from '../services'
import { UIGuideExample } from '../interfaces'
import { UIGuide } from '../../dist/cli/interfaces'
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
          {{guide.name}}
        </div>
        <div class="guide-description">
          <p>{{guide.description}}</p>
        </div>
      </div>
      <div class="example" *ngFor="let example of guide.examples">
        <ui-example [guideExample]="example">
        </ui-example>
      </div>
    </div>
  `,
  styles: [`
    .guide {
      height: 100%;
    }
    .example, .guide-text {
      margin-bottom: 5rem;
    }
    .title {
      margin-bottom: 2rem;
    }
  `]
})
export class UIGuideComponent {
  guide: UIGuide = {id: '', name: '', examples: [], description: ''}
  
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
