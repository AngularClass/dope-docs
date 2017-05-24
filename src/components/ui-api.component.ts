import { Component, Input } from '@angular/core'
import { ComponentAPI } from '../interfaces'

@Component({
  selector: 'ui-api',
  template: `
    <div class="component-api">
      <div class="inputs" *ngIf="api.inputs.length">
        <h2 class="title">Inputs</h2>
        <div class="row labels">
          <div class="col-xs" *ngFor="let inputLabel of inputLabels">
            <small class="label">{{inputLabel}}</small>
          </div>
        </div>
        <div class="row values" *ngFor="let input of api.inputs">
          <div class="col-xs value">
            {{input.name}}
          </div>
          <div class="col-xs value">
            {{input.description}}
          </div>
          <div class="col-xs value">
            {{input.type}}
          </div>
          <div class="col-xs value">
            {{input.default}}
          </div>
        </div>
      </div>
      <div class="ouputs"></div>
    </div>
  `,
  styles: [`
    .title {
      font-size: 3.5rem;
      font-weight: 300;
      margin-bottom: 3rem;
    }
    .labels {
      border-bottom: .5px solid #6A1B9A;
      margin-bottom: 2rem;
    }
    .label {
      color: #AB47BC;
      font-weight: 300;
      font-size: 2rem;
    }
    .values {
      margin-bottom: 1.5rem;
      font-weight: 100;
      font-size: 1.2rem;
    }
  `]
})
export class UIApiComponent {
  inputLabels = ['name', 'description', 'type', 'default']
  outputLabels = ['name', 'description', 'args']

  @Input() api: ComponentAPI = {inputs: [], outputs: []}
}
