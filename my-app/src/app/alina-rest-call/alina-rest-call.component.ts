import {Component, OnInit}        from '@angular/core';
import {AlinaHttpRequestService}  from "../alina-http-request.service";
import {ValuesPipe}               from "../pipes/values-pipe";
import {GlobalDataStorageService} from "../services/global-data-storage.service";
import {Subject}                  from 'rxjs/Subject';
import {
    debounceTime, distinctUntilChanged, startWith
    , map
} from "rxjs/operators";
import {_switch}                  from "rxjs/operator/switch";
import {forEach}                  from "@angular/router/src/utils/collection";
import {FormControl}              from "@angular/forms";
import {Observable}               from "rxjs/Observable";


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

    myControl: FormControl = new FormControl();
    filteredOptions: Observable<string[]>;


    constructor(
        private _AlinaHttpRequestService: AlinaHttpRequestService
        , public _GlobalDataStorageService: GlobalDataStorageService
    ) { }

    ngOnInit() {
        this.initFilteredOptions();
        this.initSearchSubject();
        this.recallSearch();
        this.reFetch();
    }

    initSearchSubject() {
        this._Subject
            .pipe(
                debounceTime(1500),
                //distinctUntilChanged(),
            )
            .subscribe({next: (v) => this.reFetch()})
    }

    /*region AM */
    initFilteredOptions() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(val => this.filter(val))
            );
    }

    filter(val: string): string[] {
        return this.models.filter(option =>
            option.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    }
    /*endregion AM */

    /*region CRUD*/

    /*region Event Handlers */
    onSelectionChanged(event){
        this.tableName = event.option.value;
        this.onChangeTable();
    }

    onChangeTable() {
        this.recallSearch();
        this.fNames = [];
        this.reFetch();
    }

    onChangeSearch($event?, fieldName?) {
        let value = '';
        if ($event) {
            /** esc */
            if ($event.keyCode === 27) {return}

            value = $event.target.value;
        }
        this.search.pager.pageCurrentNumber = 1;
        this.rememberSearch();
        this._Subject.next(value);
    }

    onChangePager() {
        this.rememberSearch();
        this.reFetch();
    }

    onGoToPager(pageN) {
        this.search.pager.pageCurrentNumber = pageN;
        this.onChangePager();
    }

    onChangeShownField(){
        this.rememberSearch()
    }
    /*endregion Event Handlers */

    reFetch = () => {
        //this.ownData = [];
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

        this.search.p  = this.search.pager.pageCurrentNumber;
        this.search.ps = this.search.pager.pageSize;

        toSend = Object.assign(toSend, this.search);

        this._AlinaHttpRequestService.send('get', toSend)
            .subscribe(resp => {
                this.processResponse(resp);
            });
    }

    addModel(){
        let newEmptyModel:any = {};
        this.fNames.forEach(function(v){
            newEmptyModel[v] = '';
        });
        newEmptyModel.isNew = true;
        newEmptyModel.editMode = true;
        this.ownData.unshift(newEmptyModel);
    }

    saveModel(item) {
        let data         = item;
        let options: any = {};
        let method = item.isNew ? 'post' : 'put';
        options.params   = {
            cmd:    "model",
            isAjax: true,
            m:      this.tableName
        };

        this._AlinaHttpRequestService.send(method, data, options)
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
        this.search      = {};
        this.search.sort = this.getDefaultSortObject();
        this.search.pager = this.getDefaultPagerObject();
        this.rememberSearch();
        this.reFetch();
    }

    rememberSearch() {
        this._GlobalDataStorageService.httpSearchParams[this.tableName] = this.search;
    }

    recallSearch() {
        this.search = this._GlobalDataStorageService.httpSearchParams[this.tableName] || {};
        if (!this.search.sort) {
            this.search.sort = this.getDefaultSortObject();
        }
        if (!this.search.pager) {
            this.search.pager = this.getDefaultPagerObject();
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
            this.search.sort = sort = this.getDefaultSortObject();
            asc = true;
        }
        sort.sortName[i] = prop;
        sort.sortAsc[i]  = asc;
        this.onChangeSearch();
    }

    getDefaultSortObject() {
        let sort: any    = {};
        sort.sortName    = [];
        sort.sortAsc     = [];
        sort.sortName[0] = 'id';
        sort.sortAsc[0]  = true;
        return sort;
    }

    /*endregion Sort*/

    /*region Page*/
    getDefaultPagerObject() {
        let pager: any          = {};
        pager.rowsTotal         = 0;
        pager.pageCurrentNumber = 1;
        pager.pageSize          = 2;
        return pager;
    }

    calcPagesTotal() {
        let rowsTotal = this.search.pager.rowsTotal;
        let pageSize  = this.search.pager.pageSize;
        if (pageSize <= 0) {pageSize = this.search.pager.pageSize = rowsTotal}
        let pagesTotal               = Math.ceil(rowsTotal / pageSize);
        this.search.pager.pagesTotal = pagesTotal;
        //this.search.pager.pagesTotalArray = Array.apply(null, {length: pagesTotal}).map(Function.call, Number);
        this.search.pager.pagesTotalArray = new Array(pagesTotal).fill(0).map(function(v,i){return i+1});
    }

    /*endregion Page*/
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

    processResponse(resp){
        if (resp.data.length > 0) {
            this.ownData = resp.data;
            this.fNames  = (new ValuesPipe).transform(this.ownData[0]);

            /*region Shown Fields*/
            if (!this.search.oShownFields) {
                this.search.oShownFields = {};
                for (let i = 0; i < this.fNames.length; i++) {
                    this.search.oShownFields[this.fNames[i]] = true;
                }
            }
            /*endregion Shown Fields*/
        }

        //ToDo: Doubtful...
        if (resp.meta) {
            resp.meta.rowsTotal ? this.search.pager.rowsTotal = resp.meta.rowsTotal : null;
            resp.meta.pageCurrentNumber ? this.search.pager.pageCurrentNumber = resp.meta.pageCurrentNumber : null;
            resp.meta.pageSize ? this.search.pager.pageSize = resp.meta.pageSize : null;
            this.calcPagesTotal();
        }
    }
    /*endregion Helpers*/
}
