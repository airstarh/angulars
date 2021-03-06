import {Component, OnInit}        from '@angular/core';
import {HttpRequestService}       from "../../../core/services/http-request.service";
import {ValuesPipe}               from "../../../shared/pipes/values-pipe";
import {GlobalDataStorageService} from "../../../core/services/global-data-storage.service";
import {Subject}                  from 'rxjs';
import {
  debounceTime
  , distinctUntilChanged
}                                 from "rxjs/operators";
import {IfsSomeData}              from "@app/app/modules/core/utils/interfaces/ifs-some-data";
import {ifsStates}                from "@app/app/modules/core/utils/interfaces/ifs-states";
import {IfsSorter}                from "@app/app/modules/core/utils/interfaces/ifs-sorter";
import {IfsPager}                 from "@app/app/modules/core/utils/interfaces/ifs-pager";

@Component({
  selector:    'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls:   ['./rest-call.component.css']
})
export class RestCallComponent implements OnInit {

  /*region Init*/
  protected ownData: Array<IfsSomeData> = [];
  protected fNames: string[]            = [];
  protected tableName                   = 'article';
  protected modelsObjs                  = [
    {label: 'article', value: 'article'},
    {label: 'user', value: 'user'},
    {label: 'role', value: 'role'},
    {label: 'blablabla', value: 'blablabla'},
  ];

  protected states: ifsStates;
  protected SubjectSearch  = new Subject<string>();
  protected modelMetaInfo: IfsSomeData;
  protected pkName: string = 'id';

  constructor(
    protected srvHttpRequest: HttpRequestService
    , protected srvGlobalDataStorage: GlobalDataStorageService
  ) { }

  ngOnInit() {
    this.states              = Object.create({}) as ifsStates;
    this.states.searchParams = Object.create({});
    this.initSubjectSearch();
    this.recallSearch();
    this.reFetch();
  }

  initSubjectSearch() {
    this.SubjectSearch
      .pipe(
        debounceTime(1000),
        //distinctUntilChanged(),
      )
      .subscribe({next: (v) => this.reFetch()})
  }

  /*endregion Init*/

  /*region Event Handlers */
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
    this.states.pager.pageCurrentNumber = 1;
    this.rememberSearch();
    this.SubjectSearch.next(value);
  }

  onChangePageSize() {
    this.states.pager.pageCurrentNumber = 1;
    this.rememberSearch();
    this.reFetch();
  }

  onGoToPage(pageN) {
    this.states.pager.pageCurrentNumber = pageN;
    this.rememberSearch();
    this.reFetch();
  }

  onChangeShownField() {
    this.states.fNames = this.fNames;
    this.rememberSearch()
  }

  moveEarlier(prop) {
    let i = this.fNames.indexOf(prop);
    if (i === -1) {return;}
    if (i === 0) {return;}

    let to          = i - 1;
    let tmp         = this.fNames[to];
    this.fNames[to] = this.fNames[i];
    this.fNames[i]  = tmp;
    this.onChangeShownField();
  }

  moveLater(prop) {
    let i = this.fNames.indexOf(prop);
    if (i === -1) {return;}
    if (i === this.fNames.length - 1) {return;}

    let to          = i + 1;
    let tmp         = this.fNames[to];
    this.fNames[to] = this.fNames[i];
    this.fNames[i]  = tmp;
    this.onChangeShownField();
  }

  /*region EditAsHtml*/
  editAsHtmlItem: IfsSomeData = Object.create({}) as IfsSomeData;
  editAsHtmlProp: string      = 'default';
  editAsHtmlValue: string     = '';
  editAsHtmlStateVisible      = false;

  editAsHtml(event, item, prop) {

    this.editAsHtmlItem         = item;
    this.editAsHtmlProp         = prop;
    this.editAsHtmlValue        = item[prop];
    this.editAsHtmlStateVisible = true;
  }

  /*endregion EditAsHtml*/

  /*endregion Event Handlers */

  /*region CRUD*/
  reFetch = () => {
    this.ownData = [];
    this.getModels();
  };

  getModels() {
    let getString: IfsSomeData = {
      cmd:    "model",
      isAjax: true,
      m:      this.tableName,
    };

    getString.sn = this.states.sort.sortName.join(',');
    getString.sa = this.states.sort.sortAsc.join(',');

    getString.p  = this.states.pager.pageCurrentNumber;
    getString.ps = this.states.pager.pageSize;

    getString = Object.assign(getString, this.states.searchParams);

    this.srvHttpRequest.send('get', getString)
      .subscribe(resp => {
        this.processResponse(resp);
      });
  }

  addModel() {
    let newEmptyModel = Object.create({}) as IfsSomeData;
    this.fNames.forEach(function (v) {
      newEmptyModel[v] = '';
    });
    newEmptyModel.isNew    = true;
    newEmptyModel.editMode = true;
    this.ownData.unshift(newEmptyModel);
  }

  saveModel(item) {
    let data       = item;
    let options    = Object.create({}) as IfsSomeData;
    let method     = item.isNew ? 'post' : 'put';
    options.params = {
      cmd:    "model",
      isAjax: true,
      m:      this.tableName
    };

    this.srvHttpRequest.send(method, data, options)
      .subscribe(resp => {
        item = Object.assign(item, resp.data);
      });
    item.editMode = false;
  }

  cancelItem(item) {

    if (item.isNew) {
      item.editMode = false;
      this.ownData.splice(0, 1);
      return;
    }

    let method    = 'get';
    let getString = {
      cmd:    "modelOne",
      isAjax: true,
      m:      this.tableName,
      mId:    item[this.pkName]
    };

    this.srvHttpRequest.send(method, getString)
      .subscribe(resp => {
        item = Object.assign(item, resp.data);
      });
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
    this.states.sort         = this.getDefaultSortObject();
    this.states.pager        = this.getDefaultPagerObject();
    this.states.searchParams = Object.create({}) as IfsSomeData;
    for (let i = 0; i < this.fNames.length; i++) {
      this.states.oShownFields[this.fNames[i]] = true;
    }
    this.rememberSearch();
    this.reFetch();
  }

  rememberSearch() {
    this.srvGlobalDataStorage.TablesStatesStore[this.tableName] = this.states;
  }

  recallSearch() {
    this.states = this.srvGlobalDataStorage.TablesStatesStore[this.tableName] || {};
    if (!this.states.searchParams) {
      this.states.searchParams = Object.create({}) as IfsSomeData;
    }
    if (!this.states.sort) {
      this.states.sort = this.getDefaultSortObject();
    }
    if (!this.states.pager) {
      this.states.pager = this.getDefaultPagerObject();
    }
  }

  /*region Sort*/
  sortTable($event, prop) {
    let sort = this.states.sort;

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
      this.states.sort = sort = this.getDefaultSortObject();
      asc = true;
    }
    sort.sortName[i] = prop;
    sort.sortAsc[i]  = asc;
    this.onChangeSearch();
  }

  getDefaultSortObject() {
    let sort: IfsSorter = Object.create({});
    sort.sortName       = [];
    sort.sortAsc        = [];
    sort.sortName[0]    = this.pkName;
    sort.sortAsc[0]     = true;
    return sort;
  }

  /*endregion Sort*/

  /*region Page*/
  getDefaultPagerObject() {
    let pager: IfsPager     = Object.create({});
    pager.rowsTotal         = 0;
    pager.pageCurrentNumber = 1;
    pager.pageSize          = 5;
    return pager;
  }

  calcPagesTotal( ) {
    let rowsTotal = this.states.pager.rowsTotal;
    let pageSize  = this.states.pager.pageSize;
    if (pageSize <= 0) {pageSize = this.states.pager.pageSize = rowsTotal}
    let pagesTotal                    = Math.ceil(rowsTotal / pageSize);
    this.states.pager.pagesTotal      = pagesTotal;
    //this.states.pager.pagesTotalArray = Array.apply(null, {length: pagesTotal}).map(Function.call, Number);
    this.states.pager.pagesTotalArray = new Array(pagesTotal).fill(0).map(function (v, i) {return i + 1});
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

  processResponse(resp) {
    if (resp.data.length > 0) {
      this.ownData = resp.data;

      /*region fNames*/
      if (!this.states.fNames) {
        this.fNames        = (new ValuesPipe).transform(this.ownData[0]);
        this.states.fNames = this.fNames;
      } else {
        this.fNames = this.states.fNames;
      }
      /*endregion fNames*/


      /*region Shown Fields*/
      if (!this.states.oShownFields) {
        this.states.oShownFields = [];
        for (let i = 0; i < this.fNames.length; i++) {
          this.states.oShownFields[this.fNames[i]] = true;
        }
      }
      /*endregion Shown Fields*/
    }

    //ToDo: Doubtful...
    if (resp.meta) {
      resp.meta.rowsTotal ? this.states.pager.rowsTotal = resp.meta.rowsTotal : null;
      resp.meta.pageCurrentNumber ? this.states.pager.pageCurrentNumber = resp.meta.pageCurrentNumber : null;
      resp.meta.pageSize ? this.states.pager.pageSize = resp.meta.pageSize : null;
      this.calcPagesTotal();

      if (resp.meta.modelMetaInfo) {
        let modelMetaInfo = this.modelMetaInfo = resp.meta.modelMetaInfo;
        this.pkName = modelMetaInfo.pkName ? modelMetaInfo.pkName : 'id';
      }
    }
  }

  /*endregion Helpers*/
}
