import { Component, Input, Renderer2, Inject } from '@angular/core'
import { sizes, colors, fonts, media, constants } from '../styles'
import { DOCUMENT } from '@angular/platform-browser'

@Component({
  selector: 'ui-guides-list',
  template: `
    <div class="navbar" *ngIf="!showNav">
      <button (click)="openNav()">menu</button>
    </div>
    <div class="mobile-nav" *ngIf="showNav">
      <div class="overlay"></div>
      <div class="nav-content">
        <button (click)="closeNav()">close</button>
        <div
          class="item link"
          *ngFor="let uiGuide of uiGuides"
          [routerLink]="['/', uiGuide.id]"
          (click)="closeNav()"
        >
          {{uiGuide.name}}
        </div>
      </div>
    </div>

    <div class="ui-guides-list">
      <div class="title link" [routerLink]="['/', 'components']">
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
    .navbar {
      height: ${sizes.navbarHeight};
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1rem;
      background-color: ${colors.main};
      color: ${colors.white};
    }

    .nav-content {
      position: fixed;
      top: 0;
      left: 0;
      width: ${sizes.mobileNavHeight};
      padding: 1rem 0px;
      height: 100%;
      overflow-y: scroll;
      background-color: ${colors.main};
      color: ${colors.white};
      z-index: ${constants.maxZ}
    }
    .overlay {
      background-color: rgba(0,0,0,0.7);
      position: fixed;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: ${constants.maxZ - 1};
    }
    .mobile-nav {}
    ${media.greaterThanPhone('.navbar{display: none; visibility: hidden}')}

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
      height: ${sizes.fullHeight};
      overflow-y: scroll;
      background-color: ${colors.main};
      color: ${colors.white};
      padding: 1.4rem 0px;
      position: fixed;
      top: 0;
      left: 0;
      width: ${sizes.sidbarWidth};
    }
    ${media.phone('.ui-guides-list{display: none; visibility: hidden}')}
    .title {
      font-size: ${fonts.sizes.large};
      text-align: left;
      padding: .5rem 1rem;
      transition: background-color .1s ease-in;
    }
    .item {
      font-size: ${fonts.sizes.small};
      font-weight: ${fonts.thickness.light};
      padding: .5rem 1rem;
      line-height: ${fonts.sizes.regular};
      width: 100%;
      text-align: left;
    }
    .item:hover, .item.active, .title:hover, .title.active {
      background-color: ${colors.mainDark};
    }
  `]
})
export class UIGudiesListComponent {
  showNav = false
  @Input() uiGuides = []
  

  constructor(
    public renderer: Renderer2,
    @Inject(DOCUMENT) public docuemnt: Document
  ) {}

  openNav() {
    this.renderer.addClass(this.docuemnt.body, 'nav-open')
    this.showNav = true
  }

  closeNav() {
    this.renderer.removeClass(this.docuemnt.body, 'nav-open')
    this.showNav = false
  }
}
