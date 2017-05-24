import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { UIGuideSandboxService } from './services/sandbox.service'
import { UIGuideSerivce } from './services/ui-guide.service'
import { UIGuideRendererComponent, UIGudiesListComponent } from './components'
import { UIGuideRouterEntryView } from './views/entry.component'
import { UIGuideRootView } from './views/root.component'
import { UIGuidePreviewView } from './views/ui-guide-preview.component'
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
    UIGuideRendererComponent,
    UIGuideRouterEntryView,
    UIGuideRootView,
    UIGuidePreviewView
  ],
  entryComponents: [
    UIGuidePreviewView,
    UIGuideRouterEntryView,
    UIGuideRendererComponent
  ],
  bootstrap: [UIGuideRootView]
})
export class UIGuideModule {}
