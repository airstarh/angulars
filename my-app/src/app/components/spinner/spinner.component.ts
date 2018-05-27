import {Component, OnInit} from '@angular/core';
import {MessageService}    from "../../modules/core/services/message.service";

@Component({
    selector:    'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls:   ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
