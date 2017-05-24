import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { UIGuideSandboxService, UIGuideSerivce } from './services'
import { UIExampleComponent, UIGuideComponent, UIGudiesListComponent } from './components'
import { ComponentsView, UIGuidePreviewView, UIGuideRootView, UIGuideRouterEntryView } from './views'
import { Routing } from './routes'

// import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    Routing
    // HighlightJsModule
  ],
  providers: [
    UIGuideSandboxService,
    UIGuideSerivce
    // HighlightJsService
  ],
  declarations: [
    UIGudiesListComponent,
    UIExampleComponent,
    UIGuideComponent,
    UIGuideRouterEntryView,
    UIGuideRootView,
    UIGuidePreviewView,
    ComponentsView
  ],
  entryComponents: [
    UIGuidePreviewView,
    UIGuideRouterEntryView
  ],
  bootstrap: [UIGuideRootView]
})
export class UIGuideModule {}
