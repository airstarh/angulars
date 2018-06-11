//@deprecated
import {NgModule}                from '@angular/core';
import {CommonModule}            from '@angular/common';
import {RatatataComponent}       from './ratatata/ratatata.component';
/**region Material Design*/
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule
    , MatCheckboxModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatInputModule
}                                from '@angular/material';

/**endregion Material Design*/

@NgModule({
              imports:      [
                  CommonModule,
                  BrowserAnimationsModule,
                  MatButtonModule, MatCheckboxModule,
                  MatDatepickerModule, MatNativeDateModule, MatInputModule
              ],
              declarations: [
                  RatatataComponent
              ],
              exports:      [
                  RatatataComponent,
              ]
          })
export class AlinaModModule {
}
