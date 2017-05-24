import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { UIGuidePreviewView, UIGuideRouterEntryView, ComponentsView } from './views'

export const routes: Routes = [
  {
    path: '',
    component: UIGuideRouterEntryView,
    children: [
      {
        path: '',
        redirectTo: '/components',
        pathMatch: 'full'
      },
      {
        path: 'components',
        component: ComponentsView
      },
      {
        path: ':guideId',
        component: UIGuidePreviewView
      }
    ]
  }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes)
