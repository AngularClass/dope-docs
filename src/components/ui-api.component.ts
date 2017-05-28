import { Component, Input } from '@angular/core'
import { ComponentAPI } from '../interfaces'
import { colors, fonts } from '../styles'


@Component({
  selector: 'ui-api',
  template: `
    <div class="component-api">
      <div class="inputs api" *ngIf="api.inputs.length">
        <h2 class="title">Inputs</h2>
        <div class="grid labels">
          <div [ngClass]="getColForInputs(inputLabel)" *ngFor="let inputLabel of inputLabels">
            <small class="label">{{inputLabel}}</small>
          </div>
        </div>
        <div class="grid values" *ngFor="let input of api.inputs">
          <div class="col-1 value">
            {{input.name}}
          </div>
          <div class="col-6 value">
            {{input.description}}
          </div>
          <div class="col-2 value">
            {{input.type}}
          </div>
          <div class="col-3 value">
            {{input.default}}
          </div>
        </div>
      </div>
      <div class="ouputs api" *ngIf="api.outputs.length">
        <h2 class="title">Outputs</h2>
        <div class="grid labels">
          <div [ngClass]="getColForOutputs(outputLabel)" *ngFor="let outputLabel of outputLabels">
            <small class="label">{{outputLabel}}</small>
          </div>
        </div>
        <div class="grid values" *ngFor="let output of api.outputs">
          <div class="col-1 value">
            {{output.name}}
          </div>
          <div class="col-6 value">
            {{output.description}}
          </div>
          <div class="col-5 value">
            {{output.args}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .title {
      font-size: ${fonts.sizes.xlarge};
      font-weight: ${fonts.thickness.light};
      margin-bottom: 3rem;
    }
    .labels {
      border-bottom: .5px solid ${colors.accentDark};
      margin-bottom: 2rem;
    }
    .label {
      color: ${colors.accent};
      font-weight: ${fonts.thickness.light};
      font-size: ${fonts.sizes.large};
    }
    .values {
      margin-bottom: 1.5rem;
      font-weight: ${fonts.thickness.lightest};
      font-size: ${fonts.sizes.regular};
    }
  `]
})
export class UIApiComponent {
  inputLabels = ['name', 'description', 'type', 'default']
  outputLabels = ['name', 'description', 'args']

  @Input() api: ComponentAPI = {inputs: [], outputs: []}
  
  getColForOutputs(outputLabel: string) {
    return {
      name: 'col-1',
      description: 'col-6',
      args: 'col-5'
    }[outputLabel]
  }

  getColForInputs(inputLabel: string) {
    return {
      name: 'col-1',
      description: 'col-6',
      type: 'col-2',
      default: 'col-3'
    }[inputLabel]
  }
}
