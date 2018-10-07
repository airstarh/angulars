import {Component, OnInit}  from '@angular/core';
import {ActivatedRoute}     from "@angular/router";
import {HttpRequestService} from "@app/app/modules/core/services/http-request.service";
import {IfsSomeData}        from "@app/app/modules/core/utils/interfaces/ifs-some-data";

@Component({
  selector:    'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls:   ['./model-detail.component.css']
})
export class ModelDetailComponent implements OnInit {

  protected pkName: string          = 'id';
  protected tableName: string;
  protected attributes: IfsSomeData = {};

  constructor(
    protected _ActivatedRoute: ActivatedRoute,
    protected srvHttpRequest: HttpRequestService
  ) { }

  ngOnInit() {
    let getParams = {};
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.pkName = params.get('id');
      this.getModel(this.pkName);
    });
  }

  protected getModel(getParams) {
    let item      = this.tableName;
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
  }
}
