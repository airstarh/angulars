import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './modules/hero/components/dashboard/dashboard.component';
import { HeroesComponent }     from './modules/hero/components/heroes/heroes.component';
import { HeroDetailComponent } from './modules/hero/components/hero-detail/hero-detail.component';
import {RestCallComponent}     from "./components/rest-call/rest-call.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'list', component: RestCallComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
