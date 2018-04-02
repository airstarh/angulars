import {Component, OnInit}        from '@angular/core';
import {AlinaHttpRequestService}  from "../alina-http-request.service";
import {ValuesPipe}               from "../pipes/values-pipe";
import {GlobalDataStorageService} from "../services/global-data-storage.service";
import {Subject}                  from 'rxjs/Subject';
import {
    debounceTime, distinctUntilChanged
    , tap
}                                 from "rxjs/operators";
import {_switch}                  from "rxjs/operator/switch";


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

    search: any      = {};
    private _Subject = new Subject<any>();

    constructor(
        private _AlinaHttpRequestService: AlinaHttpRequestService
        , public _GlobalDataStorageService: GlobalDataStorageService
    ) { }

    ngOnInit() {
        this.initSearchSubject();
        this.recallSearch();
        this.reFetch();
    }

    initSearchSubject() {
        this._Subject
            .pipe(
                debounceTime(1500),
                distinctUntilChanged(),
            )
            .subscribe({next: (v) => this.reFetch()})
    }

    /*region CRUD*/

    onChangeTable() {
        this.recallSearch();
        this.fNames = [];
        this.reFetch();
    }

    onChangeSearch($event?, fieldName?) {
        let value = '';
        if ($event) {
            if ($event.keyCode === 27) {return}
            /** esc */

            value = $event.target.value;
        }
        this.rememberSearch();
        this._Subject.next(value);
    }

    reFetch = () => {
        this.ownData = [];
        this.getModels();
    };

    getModels() {
        let toSend = {
            cmd:    "model",
            isAjax: true,
            m:      this.tableName,
        };

        this.search.sn = this.search.sort.sortName.join(',');
        this.search.sa = this.search.sort.sortAsc.join(',');

        toSend = Object.assign(toSend, this.search);

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

    canceItem(item) {
        item.editMode = false;
    }

    /*endregion CRUD*/

    /*region Log*/
    consoleLog(data) {
        if (!data) {data = this; }
        console.log("xxx ++++++++++");
        console.log(data);
    }
    /*endregion Log*/

    /*region Search*/
    clearSearch() {
        this.search = {};
        this.search.sort = this.resetSort();
        this.reFetch();
    }

    rememberSearch() {
        this._GlobalDataStorageService.httpSearchParams[this.tableName] = this.search;
    }

    recallSearch() {
        this.search = this._GlobalDataStorageService.httpSearchParams[this.tableName] || {};
        if (!this.search.sort) {
            this.search.sort = this.resetSort();
        }
    }

    /*region Sort*/
    sortTable($event, prop) {
        let sort = this.search.sort;

        let i = 0;
        if ($event.ctrlKey) {
            i = 1;
        }
        let asc = true;
        if (sort.sortName[i]) {
            asc = (prop === sort.sortName[i])
                ? !sort.sortAsc[i]
                : true;
        }
        if (i === 0 && sort.sortName.length > 1) {
            this.search.sort = sort = this.resetSort();
            asc = true;
        }
        sort.sortName[i] = prop;
        sort.sortAsc[i]  = asc;
        this.onChangeSearch();
    }

    resetSort() {
        let sort: any    = {};
        sort.sortName    = [];
        sort.sortAsc     = [];
        sort.sortName[0] = 'id';
        sort.sortAsc[0]  = true;
        return sort;
    }

    /*endregion Sort*/
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
