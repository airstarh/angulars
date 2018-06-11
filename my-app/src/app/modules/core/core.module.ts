import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
//Services
import {HttpRequestService}       from "./services/http-request.service";
import {GlobalDataStorageService} from "./services/global-data-storage.service";
import {MessageService}           from "./services/message.service";
//Components
import {MessagesComponent}        from './components/messages/messages.component';
import {SpinnerComponent}         from './components/spinner/spinner.component';

@NgModule({
  imports:      [
    CommonModule
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
