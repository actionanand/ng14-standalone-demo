import { NgModule } from '@angular/core';
import { Route, RouterModule, TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategy } from './shared/page-title-strategy';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent, // without lazy loading
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent), // with lazy loading
    title: 'About'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      )
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: TitleStrategy,  useClass: TemplatePageTitleStrategy}]
})
export class AppRoutingModule {}
