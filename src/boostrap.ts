import { UIGuideSandbox } from './interfaces'
import { UIGuideModule } from './ui-guide.module'
import { getModuleForUIGuides } from './generate-hosts'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { provideUIGuides } from './services/ui-guide.service'
import { provideResolvedSandbox } from './services/sandbox.service'
import { NgModuleRef } from '@angular/core'

/** boostrap the UI guide app */
export function bootstrap(sandBox: UIGuideSandbox): Promise<NgModuleRef<UIGuideModule>> {
  /** grab all the ui guides */
  const uiGuides = sandBox.loadUIGuides()
  /** resolve all the ui guide components and ng module */
  const resolved = getModuleForUIGuides(sandBox.ngModule, uiGuides)
  
  /** add in the extra providers to the app */
  const platform = platformBrowserDynamic([
    provideUIGuides(uiGuides),
    provideResolvedSandbox(resolved)
  ])
  
  /** boostrap the app */
  return platform.bootstrapModule(UIGuideModule)
}
