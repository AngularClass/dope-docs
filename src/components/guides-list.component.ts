import { Component , Input } from '@angular/core'

@Component({
  selector: 'ui-guides-list',
  template: `
    <div class="ui-guides-list">
      <div class="title link">
        Components
      </div>
      <div
        class="item link"
        *ngFor="let uiGuide of uiGuides"
        [routerLink]="['/', uiGuide.id]"
        routerLinkActive="active"
      >
        {{uiGuide.name}}
      </div>
    </div>
  `,
  styles: [`
    .link:active {
      border: 0px;
      outline: none;
    }
    .link {
      cursor: pointer;
      outline: none;
      border: 0px;
    }
    .ui-guides-list {
      height: 100vh;
      max-height: 100vh;
      overflow-y: scroll;
      background-color: #E91E63;
      color: #FAFAFA;
      padding: 1.4rem 0px;
    }
    .title {
      font-size: 1.5rem;
      text-align: left;
      line-height: 2rem;
      width: 100%;
      font-weight: 500;
      padding: .5rem 1rem;
      transition: background-color .1s ease-in;
    }
    .item {
      font-size: .8rem;
      font-weight: 300;
      padding: .5rem 1rem;
      line-height: 1rem;
      width: 100%;
      text-align: left;
    }
    .item:hover, .item.active, .title:hover, .title.active {
      background-color: #C2185B;
    }
  `]
})
export class UIGudiesListComponent {
  @Input() uiGuides = []
}
