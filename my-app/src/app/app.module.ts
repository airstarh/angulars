import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService}               from './hero.service';
import {MessageService}            from './message.service';
import {MessagesComponent}         from './messages/messages.component';
import {AlinaRestCallComponent}    from './alina-rest-call/alina-rest-call.component';
import {AlinaHttpRequestService}   from "./alina-http-request.service";
import {SignupFormComponent}       from "./signup-form/signup-form.component";
import { AlinaFormBuildComponent } from './alina-form-build/alina-form-build.component';
import {ValuesPipe}                from "./pipes/values-pipe";
import {AlinaModModule}            from "./alina-mod/alina-mod.module";
import {BrowserAnimationsModule}   from "@angular/platform-browser/animations";
import {GlobalDataStorageService}  from "./services/global-data-storage.service";

@NgModule({
    imports: [
        AlinaModModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        // HttpClientInMemoryWebApiModule.forRoot(
        //   InMemoryDataService, { dataEncapsulation: false }
        // )
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        AlinaRestCallComponent,
        SignupFormComponent,
        AlinaFormBuildComponent,
        ValuesPipe
    ],
    providers: [HeroService, MessageService, AlinaHttpRequestService, GlobalDataStorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
