import { Observable } from 'rxjs/Observable'
import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'ui-guide-preview',
  template: `
    <ui-guide [guideId]="id"></ui-guide>
  `,
})
export class UIGuidePreviewView {
  id: string = ''

  constructor(route: ActivatedRoute) {
    route
    .params
    .subscribe((params: Params) => {
      this.id = params['guideId']
    })
  }
}
