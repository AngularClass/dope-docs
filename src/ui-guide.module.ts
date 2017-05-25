import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { UIGuideSandboxService, UIGuideSerivce } from './services'
import { UIExampleComponent, UIGuideComponent, UIGudiesListComponent, UIApiComponent, PrismComponent } from './components'
import { ComponentsView, UIGuidePreviewView, UIGuideRootView, UIGuideRouterEntryView } from './views'
import { Routing } from './routes'
import 'prismjs/prism';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    Routing
  ],
  providers: [
    UIGuideSandboxService,
    UIGuideSerivce
  ],
  declarations: [
    PrismComponent,
    UIGudiesListComponent,
    UIExampleComponent,
    UIGuideComponent,
    UIGuideRouterEntryView,
    UIGuideRootView,
    UIGuidePreviewView,
    ComponentsView,
    UIApiComponent
  ],
  entryComponents: [
    UIGuidePreviewView,
    UIGuideRouterEntryView
  ],
  bootstrap: [UIGuideRootView]
})
export class UIGuideModule {}
