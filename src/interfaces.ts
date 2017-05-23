import {
  Injector,
  ComponentFactory,
  Type,
  ModuleWithProviders
} from '@angular/core'

export interface UIGuideExample {
  id: string
  description: string
  template: string
  styles?: string[]
  context?: any
  providers?: any[]
}

export interface UIGuide {
  id: string
  name: string
  examples: UIGuideExample[]
  imports?: any[]
  declarations?: any[]
  providers?: any[]
  declareComponent?: boolean  
}

export interface CompiledUIGuide {
  injector: Injector
  factory: ComponentFactory<any>
}

export interface UIGuideSandbox {
  module?: NodeModule
  ngModule: Type<any> | ModuleWithProviders
  loadUIGuides(): UIGuide[]
};

export interface ResolvedUIGuideSandbox {
  ngModule: Type<any>
  components: { [id: string]: Type<any> }
}
