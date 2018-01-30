///<reference path="../alina-http-request.service.ts"/>
import {Component, OnInit} from '@angular/core';
import {AlinaHttpRequestService} from "../alina-http-request.service";

@Component({
    selector: 'app-alina-rest-call-2',
    templateUrl: './alina-rest-call-2.component.html',
    styleUrls: ['./alina-rest-call-2.component.css']
})
export class AlinaRestCall2Component implements OnInit {

    ownData: any = {};

    constructor(private _AlinaHttpRequestService: AlinaHttpRequestService) {
    }

    ngOnInit() {
    }

    submitForm(f) {
        console.log("Data from Form ++++++++++");
        console.log(f);

        let toSend = f.value;

        this._AlinaHttpRequestService.send('post', toSend)
            .subscribe(resp => {
                this.ownData = resp['data'];

                console.log("Response from Server ++++++++++");
                console.log(resp);
            });
    }

    readState(f) {
        console.log("(1) Own Data ++++++++++");
        console.log(this.ownData);
    }

}
