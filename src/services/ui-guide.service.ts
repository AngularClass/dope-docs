import { Injectable, Inject, OpaqueToken } from '@angular/core'
import { UIGuide, UIGuideExample, ResolvedUIGuideSandbox } from '../interfaces'

export const UI_GUIDES = new OpaqueToken('UIGuides')
/** type for id:value object */
export type IdMap<T extends {id: string}> = {[id: string]: T}

@Injectable()
export class UIGuideSerivce {
  /** collection of all the ui guides created */
  private uiGuides: IdMap<UIGuide> = {}
  /**collection of all the ui guide examples */
  private uiGuideExamples: IdMap<UIGuideExample> = {}
  
  constructor(@Inject(UI_GUIDES) uiGuides: UIGuide[]) {
    /** turn guies into a map */
    this.uiGuides = uiGuides.reduce<IdMap<UIGuide>>(this.byId, {})
    /** turn examples into a map */
    this.uiGuideExamples = uiGuides.reduce<IdMap<UIGuideExample>>((all, next) => {
      return {
        ...all,
        ...next.examples.reduce<IdMap<UIGuideExample>>(this.byId, {})
      }
    }, {})
  }
  
  /** get one ui guide for id  */
  getUIGuide(id: string): UIGuide {
    return this.uiGuides[id]
  }
  
  /** get one example for ID */
  getUIGuideExample(id: string): UIGuideExample {
    return this.uiGuideExamples[id]
  }

  /** get all ui guides */
  getAllUIGuides(): UIGuide[] {
    return Object.keys(this.uiGuides)
    .map(key => this.uiGuides[key])
  }

  private byId<T extends {id: string}>(all: IdMap<T> = {}, next: T): IdMap<T> {
    return {...all, ...{[next.id]: next}}
  }
}

export function provideUIGuides(uiGuides: UIGuide[]) {
  return {provide: UIGUIDES, useValue: uiGuides}
}
