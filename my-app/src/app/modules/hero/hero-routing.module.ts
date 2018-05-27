import {NgModule}            from '@angular/core';
import {HeroesComponent}     from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {DashboardComponent}  from "./components/dashboard/dashboard.component";
import {
    RouterModule
    , Routes
}                            from "@angular/router";

const routes: Routes = [
    /*{path: '', redirectTo: '/hers/dashboard', pathMatch: 'full'},*/
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},
];

@NgModule({
    imports:      [
        RouterModule.forChild (routes)
    ],
    exports:      [RouterModule],
    declarations: []
})
export class HeroRoutingModule {}
