import {Component, OnInit} from '@angular/core';
import {AlinaHttpRequestService} from "../alina-http-request.service";
import {ValuesPipe} from "../pipes/values-pipe";

@Component({
    selector: 'app-alina-rest-call',
    templateUrl: './alina-rest-call.component.html',
    styleUrls: ['./alina-rest-call.component.css']
})
export class AlinaRestCallComponent implements OnInit {

    ownData: any = [];
    modelName = 'user';
    models = [
        ' ',
        'user',
        'role',
        'article',
        'blablabla',
    ];

    constructor(private _AlinaHttpRequestService: AlinaHttpRequestService) {
    }

    ngOnInit() {
        this.getModels();
    }

    getModels() {
        this.ownData = [];

        //let toSend = f.value;
        let toSend = {
            cmd: "model",
            isAjax: true,
            m: this.modelName
        };

        this._AlinaHttpRequestService.send('get', toSend)
            .subscribe(resp => {
                this.ownData = resp.data;

                console.log("Response from Server ++++++++++");
                console.log(resp);
            });
    }

    readState(f) {
        console.log("(1) Own Data ++++++++++");
        console.log(this.ownData);
    }

    isType(v, isT) {
        isT = isT.toLowerCase();
        let type = typeof v;

        if (isT === 'array') {
            if (type === 'object') {
                return v instanceof Array
            }
        }
        return type === isT;
    }
}
