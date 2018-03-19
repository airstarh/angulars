import {Injectable} from '@angular/core';

@Injectable()
export class GlobalDataStorageService {

	constructor() { }

	public httpSearchParams: any = {};
	public currentUser: any = {};


}
