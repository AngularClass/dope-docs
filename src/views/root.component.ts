import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ui-guide-root',
  template: '<router-outlet></router-outlet>',
  styles: [`
    html {
      font-size: 13px;
    }  
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      html {
        font-size: 15px;
      }
    }

    @media only screen and (min-width: 1025px) {
      html {
        font-size: 17px;
      }
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class UIGuideRootView {}
