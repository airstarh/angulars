import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class AlinaHttpRequestService {

    constructor(private _HttpClient: HttpClient,) {
    }

    public URL: string = 'http://alinazero/restAccept/index';
    public httpHeaders: {} = {
        'Content-Type': 'application/json; charset=utf-8'
    };

    public send(method: string = 'get',
                data: any = null,
                options: {} = {}): Observable<any> {

        let _HttpClient: HttpClient = this._HttpClient;
        let _Observable: Observable<any>;
        const opts: any = {};

        opts.headers = new HttpHeaders(this.httpHeaders);

        switch (method) {
            case 'post':
            case 'put':
            case 'delete':
            case 'get':
            default:

                if (data) {
                    const _HttpParams = new HttpParams({
                        fromObject: data
                    });
                    opts.params = _HttpParams;
                }

                _Observable = _HttpClient[method](this.URL, opts);
                break;
        }

        return _Observable
            .pipe(
                tap(resp => {
                        console.log("Send ++++++++++");
                        console.log(resp);
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
