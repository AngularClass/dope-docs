import { UIGuideSandboxService, UIGuideSerivce } from '../services'
import {
  Component,
  ComponentRef,
  Injector,
  Input,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core'

@Component({
  selector: 'ui-guide-renderer',
  template: `
    <div class="ui-guide-example" #uiGuideExample></div>
  `
})
export class UIGuideRendererComponent implements OnDestroy {
  private ref: ComponentRef<any>

  @ViewChild('uiGuideExample', {read: ViewContainerRef})
  public exampleConatiner: ViewContainerRef
  
  constructor(
    private sandboxService: UIGuideSandboxService,
    private uiGuideService: UIGuideSerivce,
    private injector: Injector
  ) {}

  private refresh() {
    if (this.ref) {
      this.ref.destroy()
      this.ref = null
    }
  }

  @Input() set exampleId(id: string) {
    this.refresh()

    const {factory, injector} = this.sandboxService.compilerUIGuide(id, this.injector)
    this.ref = this.exampleConatiner.createComponent(factory, 0, injector, [])
  }

  ngOnDestroy() {
    this.refresh()
  }
}
