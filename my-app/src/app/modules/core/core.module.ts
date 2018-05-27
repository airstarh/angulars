import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpRequestService}       from "./services/http-request.service";
import {GlobalDataStorageService} from "./services/global-data-storage.service";
import {MessageService}           from "./services/message.service";


@NgModule({
    imports:      [
        CommonModule
    ],
    declarations: [],
    providers:    [
        MessageService
        , HttpRequestService
        , GlobalDataStorageService
    ],
})
export class CoreModule {}
