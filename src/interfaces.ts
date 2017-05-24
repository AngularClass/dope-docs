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
