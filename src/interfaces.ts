import {
  Injector,
  ComponentFactory,
  Type,
  ModuleWithProviders
} from '@angular/core'

import {Configuration} from 'webpack'

export interface UIGuideExample {
  id: string
  description: string
  name: string
  uiGuideName: string
  template: string
  showSource?: boolean
  styles?: string[]
  context?: any
  providers?: any[]
}

export interface UIGuide {
  id: string
  name: string
  description: string
  api: ComponentAPI
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

export interface UIGuideExampleConfig {
  template: string
  description: string
  context?: any
  showSource?: boolean
  styles?: string[]
  providers?: any[]
}

export interface UIGuideBuildConfig {
  webpackConfig: Configuration
  entry: string
  host?: string
  port?: number
  include?: string[]
}

export interface DevServerConfig {
  port?: number
  proxy?: any
  host?: string
  quiet?: boolean
  noInfo?: boolean
  watchOptions?: any
  https?: boolean
  publicPath: string
}

export interface ComponentInput {
  /** the name of the @Inpout */
  name: string
  /** the value type of the input */
  type: 'string'|'object'|'number'|'boolean'|'array'
  /** input description */
  description: string
  /** the default value of the input if any */
  default?: string
}

export interface ComponentOuput {
  /** the name of the output */
  name: string
  /** describe when this event is fired */
  description: string
  /** args passed through output if any */
  args?: string
}

export interface ComponentAPI {
  inputs?: ComponentInput[]
  outputs?: ComponentOuput[]
}

export interface DopeDoc extends UIGuide {
  example(name: string, config: UIGuideExampleConfig): DopeDoc
  xexample(name?: string, config?: UIGuideExampleConfig): DopeDoc
  Xexample(name?: string, config?: UIGuideExampleConfig): DopeDoc
}

export declare var DocsBuilder: {
  new(name: string, description: string, api: ComponentAPI): DopeDoc
  example(name: string, config: UIGuideExampleConfig): DopeDoc
  xexample(name?: string, config?: UIGuideExampleConfig): DopeDoc
  Xexample(name?: string, config?: UIGuideExampleConfig): DopeDoc
}
