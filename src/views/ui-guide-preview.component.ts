import { Observable } from 'rxjs/Observable'
import { Component } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'ui-guide-preview',
  template: `
    <div class="stage">
      <ui-guide-renderer [exampleId]="id"></ui-guide-renderer>
    </div>
  `,
  styles: [`
    .stage {
      height: 100%;
      padding-top: 5rem;
    }
  `]
})
export class UIGuidePreviewView {
  id: string = ''

  constructor(route: ActivatedRoute) {
    route
    .params
    .subscribe((params: Params) => {
      this.id = params['exampleId']
    })
  }
}
