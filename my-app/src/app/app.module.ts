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
import {AdminModule}             from "./modules/admin/admin.module";
//endregion Custom Modules
//endregion Modules

//region Components
//region Vendors' Components
//------------------------ import {FormControl,FormGroup} from '@angular/forms';
import {AppComponent}            from './app.component';
//endregion Vendors' Components

//region Custom Components
//
//endregion Custom Components
//endregion Components

//region Pipes
//
//endregion Pipes

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    AdminModule,

  ],
  declarations: [
    AppComponent,
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
