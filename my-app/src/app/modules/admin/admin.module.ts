import {NgModule}          from '@angular/core';
import {CommonModule}      from '@angular/common';
//
import {SharedModule}      from "../shared/shared.module";
//
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule}           from '@angular/forms';
import {ReactiveFormsModule}   from '@angular/forms';
//
//region Libraries
//region Material
import {MatButtonModule}       from "@angular/material";
import {MatCheckboxModule}     from "@angular/material";
import {MatDatepickerModule}   from "@angular/material";
import {MatNativeDateModule}   from "@angular/material";
import {MatInputModule}          from "@angular/material";
import {MatAutocompleteModule}   from "@angular/material";
import {MatSelectModule}         from "@angular/material";
import {MatIconModule}           from "@angular/material";
//endregion Material
//region PrimeNG
import {EditorModule}            from "primeng/editor";
import {PrimeTemplate}           from "primeng/shared";
import {DropdownModule}          from "primeng/primeng";
import {TabViewModule}           from "primeng/primeng";
import {CodeHighlighterModule}   from "primeng/primeng";
//endregion PrimeNG
//endregion Libraries
//
import {RestCallComponent} from './components/rest-call/rest-call.component';



@NgModule({
  imports:      [
    CommonModule
    , SharedModule
    , BrowserAnimationsModule
    , FormsModule
    , ReactiveFormsModule

    //
    // Material Design
    ,MatButtonModule,
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
  exports:      [
    RestCallComponent
  ],
  declarations: [
    RestCallComponent
  ]
})
export class AdminModule {}
