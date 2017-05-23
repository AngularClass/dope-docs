import { Component } from '@angular/core'
import { UIGuideSerivce } from '../services/ui-guide.service'
import { UIGuide } from '../interfaces'

@Component({
  selector: 'ui-guide-entry-view',
  template: `
    <div class="layout">
      <nav>
        
      </nav>
      <div class="grow">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .grow {
      flex-grow: 5;
    }
  `]
})
export class RootContainerComponent {
  examples: UIGuide[];

  constructor(uiGuideService: UIGuideSerivce) {
    this.examples = uiGuideService.getAllUIGuides()
  }
}
