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
    <div class="guide row">
      <div class="example" *ngFor="let example of guide.examples">
        <ui-example [guideExample]="example">
        </ui-example>
      </div>
    </div>
  `,
  styles: [`
    .example {
      margin-bottom: 5rem;
    }
  `]
})
export class UIGuideComponent {
  guide: UIGuide = {id: '', name: '', examples: []}
  
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
