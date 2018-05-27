import {Component}                from '@angular/core';
import {MessageService}           from "./modules/core/services/message.service";
import {GlobalDataStorageService} from "./modules/core/services/global-data-storage.service";

@Component({
               selector:    'app-root',
               templateUrl: './app.component.html',
               styleUrls:   ['./app.component.css'],
           })
export class AppComponent {
    title = 'Alina Rest Call';
    constructor() { }
}
