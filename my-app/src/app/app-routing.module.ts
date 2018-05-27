import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestCallComponent}    from "./components/rest-call/rest-call.component";

const routes: Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: RestCallComponent},

    { path: 'hers', loadChildren: './modules/hero/hero.module#HeroModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
