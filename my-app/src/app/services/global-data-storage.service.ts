import {Injectable} from '@angular/core';

@Injectable()
export class GlobalDataStorageService {

	constructor() { }

    public currentUser: any       = {};
    public spinner: boolean       = false;
    public TablesStatesStore: any = {};


}
