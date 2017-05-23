import { pluck } from 'rxjs/operator/pluck'
import { Observable } from 'rxjs/Observable'
import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ui-guide-preview',
  template: `
    <div class="stage">
      <ui-guide-renderer [exampleId]="id"></ui-guide-renderer>
    </div>
  `
})
export class UIGuidePreviewView {
  id: string

  constructor(route: ActivatedRoute) {
    this.id = pluck.call(route.params, 'exampleId')
  }
}
