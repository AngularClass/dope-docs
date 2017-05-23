import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { UIGuideView } from './views/root.component'
import { UIGuidePreviewView } from './views/ui-guide-preview.component'

export const routes: Routes = [
  {
    path: '',
    component: UIGuideView,
    children: [
      {
        path: ':uiGuide/:exampleId',
        component: UIGuidePreviewView
      }
    ]
  }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)
