import {Component, OnInit}       from '@angular/core';
import {AlinaHttpRequestService} from "../alina-http-request.service";
import {ValuesPipe}              from "../pipes/values-pipe";

@Component({
	           selector:    'app-alina-rest-call',
	           templateUrl: './alina-rest-call.component.html',
	           styleUrls:   ['./alina-rest-call.component.css']
           })
export class AlinaRestCallComponent implements OnInit {

	ownData: any = [];
	modelName    = 'article';
	models       = [
		' ',
		'user',
		'role',
		'article',
		'blablabla',
	];

	search: any = {};

	constructor(private _AlinaHttpRequestService: AlinaHttpRequestService) {
	}

	ngOnInit() {
		this.getModels();
	}

	/*region CRUD*/
	getModels() {
		this.ownData = [];

//let toSend = f.value;
		let toSend = {
			cmd:    "model",
			isAjax: true,
			m:      this.modelName
		};

		this._AlinaHttpRequestService.send('get', toSend)
		    .subscribe(resp => {
			    this.ownData = resp.data;
		    });
	}

	saveModel(item) {
		let data         = item;
		let options: any = {};
		options.params   = {
			cmd:    "model",
			isAjax: true,
			m:      this.modelName
		};

		this._AlinaHttpRequestService.send('put', data, options)
		    .subscribe(resp => {
			    item = Object.assign(item, resp.data);
		    });
		item.editMode = false;
	}

	cancalItem(item) {
		item.editMode = false;
	}

	/*endregion CRUD*/

	/*region Log*/
	logAllCurrentModels() {
		console.log("(1) Own Data ++++++++++");
		console.log(this.ownData);
	}

	logModelState(iten) {
		console.log("Current Item ++++++++++");
		console.log(iten);
	}

	logSearch() {
		console.log("Search ++++++++++");
		console.log(this.search);
	}

	/*endregion Log*/

	/*region Search*/
	clearSearch() {
		this.search = {};
	}

	/*endregion Search*/

	/*region Helpers*/
	stateEditModeOn(item) {
		item.editMode = true;
	}

	isType(v, isT) {
		isT      = isT.toLowerCase();
		let type = typeof v;

		if (isT === 'array') {
			if (type === 'object') {
				return v instanceof Array
			}
		}
		return type === isT;
	}

	/*endregion Helpers*/
}
