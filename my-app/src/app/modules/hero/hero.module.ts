import {NgModule}                         from '@angular/core';
import {CommonModule}                     from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}                 from '@angular/common/http';

/*region Hero Tour*/
import {DashboardComponent}               from './components/dashboard/dashboard.component';
import {HeroDetailComponent}              from './components/hero-detail/hero-detail.component';
import {HeroesComponent}                  from './components/heroes/heroes.component';
import {HeroSearchComponent}              from './components/hero-search/hero-search.component';
import {HeroService}                      from './services/hero.service';
import {HeroRoutingModule}                from './hero-routing.module';
//import {HttpClientInMemoryWebApiModule}   from 'angular-in-memory-web-api';
//import {InMemoryDataService}      from './services/in-memory-data.service';
/*endregion Hero Tour*/

@NgModule({
    imports:      [
        CommonModule
        , HttpClientModule
        , FormsModule
        , ReactiveFormsModule
        , HeroRoutingModule

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        // HttpClientInMemoryWebApiModule.forRoot(
        //   InMemoryDataService, { dataEncapsulation: false }
        // )
    ],
    declarations: [
        DashboardComponent
        , HeroesComponent
        , HeroDetailComponent
        , HeroSearchComponent,
    ],
    providers:    [HeroService]
})
export class HeroModule {}