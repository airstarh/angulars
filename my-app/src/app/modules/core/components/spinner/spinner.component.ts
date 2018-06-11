import {Component, OnInit}        from '@angular/core';
import {GlobalDataStorageService} from "../../services/global-data-storage.service";

@Component({
    selector:    'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls:   ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

    constructor(private srvGlobalDataStorage: GlobalDataStorageService) { }

    ngOnInit() {
    }

}
