import { Component } from '@angular/core'
import { UIGuideSerivce } from '../services/ui-guide.service'
import { UIGuide } from '../interfaces'

@Component({
  selector: 'ui-guide-router-entry-view',
  template: `
    <div class="row">
      <div class="col-xs-2">
        <ui-guides-list [uiGuides]="uiGuides"></ui-guides-list>
      </div>
      <div class="col-xs">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .conatiner {
      width: 100%;
      height: 100%;
    }
  `]
})
export class UIGuideRouterEntryView {
  uiGuides: UIGuide[] = []

  constructor(uiGuideService: UIGuideSerivce) {
    this.uiGuides = uiGuideService.getAllUIGuides()
  }
}
