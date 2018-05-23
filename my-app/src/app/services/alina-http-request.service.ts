import {Injectable}               from '@angular/core';
import {HttpClient}               from '@angular/common/http';
import {Observable, of}           from 'rxjs';
import {
	catchError
	, debounceTime
	, throttleTime
	, map
	, tap
}                                 from 'rxjs/operators';
import {MessageService}           from "./message.service";
import {GlobalDataStorageService} from "./global-data-storage.service";

@Injectable()
export class AlinaHttpRequestService {

	constructor(
		private srvHttpClient: HttpClient,
		public srvMessage: MessageService,
        public srvGlobalDataStorage: GlobalDataStorageService
	) {
	}

	public URL: string = 'http://alinazero/alinaRestAccept/index';

	public httpHeaders: {} = {
		'Content-Type': 'application/json; charset=utf-8'
		//ToDo: Auth Token here.
	};

	public send(
		method: string = 'get',
		data: any      = false,
		options: any   = {}
	): Observable<any> {
        this.srvGlobalDataStorage.spinner = true;
		let srvHTTP: HttpClient     = this.srvHttpClient;
		let obsHTTP: Observable<any>;
		const objHttpOpts: any     = {};
		objHttpOpts.headers        = this.httpHeaders;
		objHttpOpts.params         = {};
		options.headers ? Object.assign(objHttpOpts.headers, options.headers) : null;
		options.params ? Object.assign(objHttpOpts.params, options.params) : null;

		switch (method) {
			// POST
			case 'post':
				obsHTTP = srvHTTP.post(this.URL, data, objHttpOpts);
				break;
			// PUT
			case 'put':
				obsHTTP = srvHTTP.put(this.URL, data, objHttpOpts);
				break;
			// DELETE
			case 'delete':
				if (data) {
					objHttpOpts.params = typeof data === 'number' ? {"id": data} : data;
				}
				obsHTTP = srvHTTP.delete(this.URL, objHttpOpts);
				break;
			//GET
			case 'get':
			default:
				if (data) {
					objHttpOpts.params = data;
				}
				obsHTTP = srvHTTP.get(this.URL, objHttpOpts);
				break;
		}

		return obsHTTP
			.pipe(
				//throttleTime(1500),
				tap(
					resp => {
                        this.srvGlobalDataStorage.spinner = false;
						console.log("Alina Response From Server ++++++++++");
						console.log(resp);
						if (resp.messages) {
							resp.messages.forEach(item => {
								this.srvMessage.add(item);
							});
						}
					}
				),
				catchError(this.handleError('Error Send', []))
			);
	}


	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			//this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}


}
