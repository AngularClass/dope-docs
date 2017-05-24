import { Component , Input } from '@angular/core'

@Component({
  selector: 'ui-guides-list',
  template: `
    <div class="ui-guides-list">
      <div class="guide" *ngFor="let uiGuide of uiGuides">
        <h4 class="guide-name">{{uiGuide.name}}</h4>
        <div class="guide-examples" *ngFor="let example of uiGuide.examples">
          <a [routerLink]="['/', uiGuide.id, example.id]">
            {{example.name}}
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ui-guides-list {
      height: 100vh;
      max-height: 100vh;
      overflow-y: scroll;
      background-color: #323155;
      color: white;
      padding: 1.4rem 2rem;
    }
    .guide {
      margin-bottom: 2rem;
    }
    .guide-name {
      margin-bottom: 1rem;
    }
    .guide-examples {
      margin-left: 1rem;
    }
    a {
      cursor: pointer;
      color: white; 
      text-decoration: none;
    }
  `]
})
export class UIGudiesListComponent {
  @Input() uiGuides = []

}
