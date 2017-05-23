import {
  Injectable,
  NgModuleFactory,
  OpaqueToken,
  Inject,
  Compiler,
  Injector
} from '@angular/core'
import { ResolvedUIGuideSandbox, CompiledUIGuide } from '../interfaces'

export const RESOLVED_UI_GUIDE_SANDBOX = new OpaqueToken('Resolved ui guide sandbox')


@Injectable()
export class UIGuideSandboxService {
  private uiGuideSandbox: ResolvedUIGuideSandbox
  private factory: NgModuleFactory<any>

  constructor(
    @Inject(RESOLVED_UI_GUIDE_SANDBOX) sandbox: ResolvedUIGuideSandbox,
    compiler: Compiler
  ) {
    this.uiGuideSandbox = sandbox
    /** create the factory for the ui guides ngModule */
    this.factory = compiler.compileModuleSync(this.uiGuideSandbox.ngModule)
  }
  
  /** compile component used in an ui guide */
  compilerUIGuide(id: string, injector: Injector ): CompiledUIGuide {
    const component = this.uiGuideSandbox.components[id]
    const ref = this.factory.create(injector)
    const factory = ref.componentFactoryResolver.resolveComponentFactory(component)

    return {factory, injector: ref.injector}
  }
}

export function provideResolvedSandbox(sandbox: ResolvedUIGuideSandbox) {
  return { provide: RESOLVED_UI_GUIDE_SANDBOX, useValue: sandbox }
}
