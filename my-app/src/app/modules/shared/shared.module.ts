import {NgModule}                from '@angular/core';
import {CommonModule}            from '@angular/common';
//
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule}             from '@angular/forms';
import {ReactiveFormsModule}     from '@angular/forms';
//
import {EditorModule}            from "primeng/editor";
//
import {ValuesPipe}              from "./pipes/values-pipe";
//
import {EditFieldHtmlComponent}  from './components/edit-field-html/edit-field-html.component';
import {HtmlRealPipe}            from "./pipes/html-real.pipe";

@NgModule({
  imports:      [
    CommonModule
    //
    , BrowserAnimationsModule
    , FormsModule
    , ReactiveFormsModule
    , EditorModule
  ],
  declarations: [
    ValuesPipe
    , HtmlRealPipe
    , EditFieldHtmlComponent
  ],
  exports:      [
    ValuesPipe
    , HtmlRealPipe
    , EditFieldHtmlComponent
  ],
})
export class SharedModule {}
