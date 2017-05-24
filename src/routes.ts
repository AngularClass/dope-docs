import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { UIGuidePreviewView, UIGuideRouterEntryView } from './views'

export const routes: Routes = [
  {
    path: '',
    component: UIGuideRouterEntryView,
    children: [
      {
        path: ':uiGuide/:exampleId',
        component: UIGuidePreviewView
      }
    ]
  }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)
