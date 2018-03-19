import {Component, OnInit}        from '@angular/core';
import {AlinaHttpRequestService}  from "../alina-http-request.service";
import {ValuesPipe}               from "../pipes/values-pipe";
import {GlobalDataStorageService} from "../services/global-data-storage.service";

@Component({
	           selector:    'app-alina-rest-call',
	           templateUrl: './alina-rest-call.component.html',
	           styleUrls:   ['./alina-rest-call.component.css']
           })
export class AlinaRestCallComponent implements OnInit {

	ownData: any     = [];
	fNames: string[] = [];
	tableName        = 'article';
	models           = [
		' ',
		'user',
		'role',
		'article',
		'blablabla',
	];

	search: any = {};

	constructor(private _AlinaHttpRequestService: AlinaHttpRequestService
		, public _GlobalDataStorageService: GlobalDataStorageService) {
	}

	ngOnInit() {
		this.resetSort();
		this.getModels();
	}

	/*region CRUD*/

	onChangeTable() {
		this.fNames  = [];
		this.ownData = [];
		this.getModels();
	}

	onChangeSearch() {
		this.ownData = [];
		this.rememberSearch();
		this.getModels();
	}

	getModels() {
		this.restoreSearch();
		let toSend = {
			cmd:    "model",
			isAjax: true,
			m:      this.tableName,
		};

		this.search.sa = this.sort.sortAsc.join(',');
		this.search.sn = this.sort.sortName.join(',');

		toSend         = Object.assign(toSend, this.search);

		this._AlinaHttpRequestService.send('get', toSend)
		    .subscribe(resp => {
			    if (resp.data.length > 0) {
				    this.ownData = resp.data;
				    this.fNames  = (new ValuesPipe).transform(this.ownData[0])
			    }
		    });
	}

	saveModel(item) {
		let data         = item;
		let options: any = {};
		options.params   = {
			cmd:    "model",
			isAjax: true,
			m:      this.tableName
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

	logComponent() {
		console.log("this ++++++++++");
		console.log(this);
	}

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

		console.log("this._GlobalDataStorageService ++++++++++");
		console.log(this._GlobalDataStorageService);
	}

	/*endregion Log*/

	/*region Search*/
	clearSearch() {
		this.search = {};
	}

	rememberSearch() {
		this._GlobalDataStorageService.httpSearchParams[this.tableName] = this.search;
	}

	restoreSearch() {
		this.search = this._GlobalDataStorageService.httpSearchParams[this.tableName] || {};
	}

	/**region Sort*/
	public sort = {
		sortName: ['id'],
		sortAsc:  [true]
	};

	//ToDo: True legacy!!!
	sortTable($event, prop) {
		if (!this.sort.sortName) {this.resetSort()}
		let i = 0;
		if ($event.ctrlKey) {
			i = 1;
		}
		let asc = true;
		if (this.sort.sortName[i]) {
			asc = (prop === this.sort.sortName[i])
				? !this.sort.sortAsc[i]
				: true;
		}
		if (i === 0 && this.sort.sortName.length > 1) {
			this.resetSort();
			asc = true;
		}
		this.sort.sortName[i] = prop;
		this.sort.sortAsc[i]  = asc;
		this.getModels();
	}

	resetSort() {
		this.sort.sortName    = [];
		this.sort.sortAsc     = [];
		this.sort.sortName[0] = 'id';
		this.sort.sortAsc[0]  = true;
	}

	/**endregion Sort*/
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
