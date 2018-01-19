import {Component, OnInit} from '@angular/core';
import {AlinaHttpRequestService} from "../alina-http-request.service";

@Component({
    selector: 'app-alina-rest-call',
    templateUrl: './alina-rest-call.component.html',
    styleUrls: ['./alina-rest-call.component.css']
})
export class AlinaRestCallComponent implements OnInit {

    ownData:any = {};

    constructor(private _AlinaHttpRequestService: AlinaHttpRequestService) {
    }

    ngOnInit() {
    }

    submitForm(f) {
        console.log("Data from Form ++++++++++");
        console.log(f);

        let toSend = f.value;

        this._AlinaHttpRequestService.send('get', toSend)
            .subscribe(resp => {


                console.log("Response from Server ++++++++++");
                console.log(resp);

                this.ownData = resp['data'];
            });
    }

}
