//region Modules
//region Vendors' Modules
import {NgModule}                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {AppRoutingModule}        from './app-routing.module';
//endregion Vendors' Modules
//region Custom Modules
import {CoreModule}              from "./modules/core/core.module";
import {AdminModule}             from "./modules/admin/admin.module";
//endregion Custom Modules
//endregion Modules

//region Components
//region Vendors' Components
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
    //
    AppRoutingModule,
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
