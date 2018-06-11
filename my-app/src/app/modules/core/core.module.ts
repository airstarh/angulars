import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
//Services
import {HttpRequestService}       from "./services/http-request.service";
import {GlobalDataStorageService} from "./services/global-data-storage.service";
import {MessageService}           from "./services/message.service";
//Components
import {MessagesComponent}        from './components/messages/messages.component';
import {SpinnerComponent}         from './components/spinner/spinner.component';
import {HttpClientModule}         from "@angular/common/http";

@NgModule({
  imports:      [
    CommonModule
    , HttpClientModule
  ],
  exports: [
    MessagesComponent
    , SpinnerComponent
  ],
  declarations: [
    MessagesComponent
    , SpinnerComponent
  ],
  providers:    [
    MessageService
    , HttpRequestService
    , GlobalDataStorageService
  ],
})
export class CoreModule {}
