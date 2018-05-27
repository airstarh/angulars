import {NgModule}                         from '@angular/core';
import {BrowserModule}                    from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule}                 from '@angular/common/http';
import {AppRoutingModule}                 from './app-routing.module';
import {AppComponent}                     from './app.component';


import {MessagesComponent} from './components/messages/messages.component';
import {RestCallComponent} from './components/rest-call/rest-call.component';

import {AlinaFormBuildComponent} from './components/alina-form-build/alina-form-build.component';
import {ValuesPipe}              from "./pipes/values-pipe";
import {AlinaModModule}          from "./alina-mod/alina-mod.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule}         from "@angular/material";
import {MatCheckboxModule}       from "@angular/material";
import {MatDatepickerModule}     from "@angular/material";
import {MatNativeDateModule}     from "@angular/material";
import {MatInputModule}          from "@angular/material";
import {MatAutocompleteModule}   from "@angular/material";
import {MatSelectModule}         from "@angular/material";
import {MatIconModule}           from "@angular/material";
import {EditFieldHtmlComponent}  from './components/edit-field-html/edit-field-html.component';
import {HtmlRealPipe}            from './pipes/html-real.pipe';
import {SpinnerComponent}        from './components/spinner/spinner.component';
import {EditorModule}            from "primeng/editor";
import {PrimeTemplate}           from "primeng/shared";
import {DropdownModule}          from "primeng/primeng";
import {TabViewModule}           from "primeng/primeng";
import {CodeHighlighterModule}   from "primeng/primeng";
import {CoreModule}              from "./modules/core/core.module";

@NgModule({
    imports:      [
        AlinaModModule,
        CoreModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,

        // Material Design
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatIconModule,
        //end Material Design

        //PrimeNG
        EditorModule,
        DropdownModule,
        TabViewModule,
        CodeHighlighterModule

        //end PrimeNG
    ],
    declarations: [
        AppComponent,
        MessagesComponent,
        RestCallComponent,
        AlinaFormBuildComponent,
        ValuesPipe,
        EditFieldHtmlComponent,
        HtmlRealPipe,
        SpinnerComponent
    ],
    providers:    [],
    bootstrap:    [AppComponent]
})
export class AppModule {
}
