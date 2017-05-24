import { Component } from '@angular/core'
import { UIGuideSerivce } from '../services/ui-guide.service'
import { UIGuide } from '../interfaces'

@Component({
  selector: 'ui-guide-router-entry-view',
  template: `
    <div class="row entry">
      <div class="col-xs-2">
        <ui-guides-list [uiGuides]="uiGuides"></ui-guides-list>
      </div>
      <div class="col-xs content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .entry {
      max-height: 100vh;
    }
    .content {
      overflow-y: scroll;
    }
  `]
})
export class UIGuideRouterEntryView {
  uiGuides: UIGuide[] = []

  constructor(uiGuideService: UIGuideSerivce) {
    this.uiGuides = uiGuideService.getAllUIGuides()
  }
}
