import {NgModule}                         from '@angular/core';
import {BrowserModule}                    from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}                 from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}   from 'angular-in-memory-web-api';
import {InMemoryDataService}              from './services/in-memory-data.service';
import {AppRoutingModule}                 from './app-routing.module';
import {AppComponent}              from './app.component';
import {DashboardComponent}        from './components/dashboard/dashboard.component';
import {HeroDetailComponent}       from './components/hero-detail/hero-detail.component';
import {HeroesComponent}           from './components/heroes/heroes.component';
import {HeroSearchComponent}       from './components/hero-search/hero-search.component';
import {HeroService}               from './services/hero.service';
import {MessageService}            from './services/message.service';
import {MessagesComponent}         from './components/messages/messages.component';
import {AlinaRestCallComponent}    from './components/alina-rest-call/alina-rest-call.component';
import {AlinaHttpRequestService}   from "./services/alina-http-request.service";
import { AlinaFormBuildComponent } from './components/alina-form-build/alina-form-build.component';
import {ValuesPipe}                from "./pipes/values-pipe";
import {AlinaModModule}            from "./alina-mod/alina-mod.module";
import {BrowserAnimationsModule}   from "@angular/platform-browser/animations";
import {GlobalDataStorageService}  from "./services/global-data-storage.service";
import {MatButtonModule}           from "@angular/material";
import {MatCheckboxModule}        from "@angular/material";
import {MatDatepickerModule}      from "@angular/material";
import {MatNativeDateModule}      from "@angular/material";
import {MatInputModule}           from "@angular/material";
import {MatAutocompleteModule}    from "@angular/material";
import {MatSelectModule}          from "@angular/material";
import {MatIconModule}            from "@angular/material";
import { AlinaTextEditComponent } from './components/alina-text-edit/alina-text-edit.component';
import {EditorModule}             from "primeng/editor";
import {PrimeTemplate}            from "primeng/shared";
import { HtmlRealPipe } from './pipes/html-real.pipe';

@NgModule({
    imports: [
        AlinaModModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatIconModule,

        EditorModule,

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
        AlinaFormBuildComponent,
        ValuesPipe,
        AlinaTextEditComponent,
        HtmlRealPipe
    ],
    providers: [HeroService, MessageService, AlinaHttpRequestService, GlobalDataStorageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
