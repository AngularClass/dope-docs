import { Component, ViewEncapsulation } from '@angular/core'
import { UIGuideSerivce } from '../services/ui-guide.service'
import { UIGuide } from '../interfaces'
import {sizes, media} from '../styles'

const tabletUp = `.main {padding-left: ${sizes.sidbarWidth}; padding-top: 0px;}`
const phone = `.main {padding-top: ${sizes.navbarHeight}; padding-left: 0px;}`

@Component({
  selector: 'ui-guide-router-entry-view',
  template: `
    <div class="entry">
      <ui-guides-list [uiGuides]="uiGuides"></ui-guides-list>
      <div class="main">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .nav-open .main {
      display: none;
    }
    .main {
      overflow-x: hidden;
    }
    ${phone}
    ${media.greaterThanPhone(tabletUp)}
  `],
  encapsulation: ViewEncapsulation.None
})
export class UIGuideRouterEntryView {
  uiGuides: UIGuide[] = []

  constructor(uiGuideService: UIGuideSerivce) {
    this.uiGuides = uiGuideService.getAllUIGuides()
  }
}
