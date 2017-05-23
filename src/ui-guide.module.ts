import {
  NgModule,

} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { UIGuideSandboxService } from './services/sandbox.service'
import { UIGuideSerivce } from './services/ui-guide.service'
import { UIGuideRendererComponent } from './components/ui-guide-renderer.component'
import { RootContainerComponent } from './views/entry.component'
import { UIGuideView } from './views/root.component'
import { UIGuidePreviewView } from './views/ui-guide-preview.component'
import { Routing } from './routes'

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
    UIGuideRendererComponent,
    RootContainerComponent,
    UIGuideView,
    UIGuidePreviewView
  ],
  entryComponents: [
    UIGuidePreviewView,
    UIGuideView
  ],
  bootstrap: [RootContainerComponent]
})
export class UIGuideModule {}
