import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './pages/home/home.routing';
import { DashboardRoutingModule } from './pages/dashboard/dashboard.routing';
import { DetailRoutingModule } from './pages/detail/detail.routing';
import { ServerRoutingModule } from './pages/server/servers.routing';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true }),
    HomeRoutingModule,
    DashboardRoutingModule,
    DetailRoutingModule,
    ServerRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
