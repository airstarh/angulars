import {NgModule}                from '@angular/core';
import {CommonModule}            from '@angular/common';
//
import {SharedModule}            from "../shared/shared.module";
//
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule}             from '@angular/forms';
import {ReactiveFormsModule}     from '@angular/forms';
//
//region Libraries
//region PrimeNG
import {EditorModule}            from "primeng/editor";
import {CheckboxModule}          from 'primeng/checkbox';
import {ButtonModule}            from 'primeng/button';
import {DropdownModule}          from "primeng/primeng";
import {TabViewModule}           from "primeng/primeng";
import {CodeHighlighterModule}   from "primeng/primeng";
//endregion PrimeNG
//endregion Libraries
//
import {RestCallComponent}       from './components/rest-call/rest-call.component';


@NgModule({
  imports:      [
    CommonModule
    , SharedModule
    , BrowserAnimationsModule
    , FormsModule
    , ReactiveFormsModule

    //PrimeNG
    //, EditorModule
    , CheckboxModule
    , ButtonModule
    , DropdownModule
    , TabViewModule
    , CodeHighlighterModule
    //end PrimeNG
  ],
  exports:      [
    RestCallComponent
  ],
  declarations: [
    RestCallComponent
  ]
})
export class AdminModule {}
