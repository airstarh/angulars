import {Component, OnInit} from '@angular/core';
import {AlinaHttpRequestService} from "../alina-http-request.service";

@Component({
    selector: 'app-alina-rest-call',
    templateUrl: './alina-rest-call.component.html',
    styleUrls: ['./alina-rest-call.component.css']
})
export class AlinaRestCallComponent implements OnInit {

    constructor(private _AlinaHttpRequestService: AlinaHttpRequestService) {
    }

    ngOnInit() {
    }

    submitForm(f) {
        console.log("submitForm ++++++++++");
        console.log(f);

        let v = f.value;

        this._AlinaHttpRequestService.send('get', v)
            .subscribe(resp => {
                console.log("submitForm _AlinaHttpRequestService  ++++++++++");
                console.log(resp);
            });
    }

}
