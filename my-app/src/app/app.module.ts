//region Modules
//region Vendors' Modules
import {NgModule}                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {FormsModule}             from '@angular/forms';
import {ReactiveFormsModule}     from '@angular/forms';
import {HttpClientModule}        from '@angular/common/http';
import {AppRoutingModule}        from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//endregion Vendors' Modules
//region Custom Modules
import {CoreModule}              from "./modules/core/core.module";
//endregion Custom Modules
//endregion Modules

//region Components
//region Vendors' Components
import {AppComponent}            from './app.component';
//endregion Vendors' Components

//region Custom Components
import {RestCallComponent}      from './components/rest-call/rest-call.component';
import {EditFieldHtmlComponent} from './components/edit-field-html/edit-field-html.component';
//endregion Custom Components
//endregion Components

//region Pipes
import {ValuesPipe}            from "./pipes/values-pipe";
import {HtmlRealPipe}          from './pipes/html-real.pipe';
//endregion Pipes

//region Libraries
//region Material
import {MatButtonModule}       from "@angular/material";
import {MatCheckboxModule}     from "@angular/material";
import {MatDatepickerModule}   from "@angular/material";
import {MatNativeDateModule}   from "@angular/material";
import {MatInputModule}        from "@angular/material";
import {MatAutocompleteModule} from "@angular/material";
import {MatSelectModule}       from "@angular/material";
import {MatIconModule}         from "@angular/material";
//endregion Material
//region PrimeNG
import {EditorModule}          from "primeng/editor";
import {PrimeTemplate}         from "primeng/shared";
import {DropdownModule}        from "primeng/primeng";
import {TabViewModule}         from "primeng/primeng";
import {CodeHighlighterModule} from "primeng/primeng";
//endregion PrimeNG
//endregion Libraries

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,

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

    RestCallComponent,
    ValuesPipe,
    EditFieldHtmlComponent,
    HtmlRealPipe,

  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
