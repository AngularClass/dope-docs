import { Component } from '@angular/core'
@Component({
  selector: 'ui-guide-components-view',
  template: `
    <div class="components-view">
      <h3>Components</h3>
      
      <p>
        Describe the library here. Need to make this dynamic from user and not hard coded
      </p>
    </div>
  `,
  styles: [`
    h3 {
      font-weight: 300;
      font-size: 3rem;
    }
  `]
})
export class ComponentsView {}
