import { Component, Input } from '@angular/core'
import { ComponentAPI } from '../interfaces'

@Component({
  selector: 'ui-api',
  template: `
    <div class="component-api">
      <div class="inputs" *ngIf="api.inputs.length">
        <h4 class="title">Inputs</h4>
        <div class="row labels">
          <div class="col-xs" *ngFor="let inputLabel of inputLabels">
            <small class="label">{{inputLabel}}</small>
          </div>
        </div>
        <div class="row values" *ngFor="let input of api.inputs">
          <div class="col-xs">
            {{input.name}}
          </div>
          <div class="col-xs">
            {{input.description}}
          </div>
          <div class="col-xs">
            {{input.type}}
          </div>
          <div class="col-xs">
            {{input.args}}
          </div>
        </div>
      </div>
      <div class="ouputs"></div>
    </div>
  `,
  styles: [`
    .title {
      
    }
    .labels {
      border-bottom: .5px solid #6A1B9A;
    }
    .label {
      color: #AB47BC;
      font-weight: 300;
      border-right: .5px solid #6A1B9A;
    }
  `]
})
export class UIApiComponent {
  inputLabels = ['name', 'description', 'type', 'default']
  outputLabels = ['name', 'description', 'args']

  @Input() api: ComponentAPI = {inputs: [], outputs: []}
}
