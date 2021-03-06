import { Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';


export const DASHBOARD_ROUTES :Route[] = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard'
  },
  {
    path: 'form',
    loadComponent: () => import('./typed-form/typed-form.component').then(mod => mod.TypedFormComponent),
    title: 'Typed Form'
  }
];