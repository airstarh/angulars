import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class AlinaHttpRequestService {

    constructor(private _HttpClient: HttpClient,) {
    }

    public URL: string = 'http://alinazero/alinaRestAccept/index';

    public httpHeaders: {} = {
        'Content-Type': 'application/json; charset=utf-8'
    };

    public set(anObject: {}, propertyName: string, value: any) {
        anObject[propertyName] = value;
    };

    public send(method: string = 'get',
                data: any      = false,
                options: {}    = {}
    ): Observable<any> {
        let _HttpClient: HttpClient   = this._HttpClient;
        let _Observable: Observable<any>;
        let _HttpParams: HttpParams;
        const httpRequestOptions: any = {};
        httpRequestOptions.headers    = new HttpHeaders(this.httpHeaders);

        switch (method) {
            // POST
            case 'post':
                _Observable = _HttpClient[method](this.URL, data, httpRequestOptions);
                break;
            // PUT
            case 'put':
                _Observable = _HttpClient[method](this.URL, data, httpRequestOptions);
                break;
            // DELETE
            case 'delete':

                if (data) {
                    const toSend              = typeof data === 'number' ? {"id": data} : data;
                    _HttpParams               = new HttpParams({
                                                                   fromObject: toSend
                                                               });
                    httpRequestOptions.params = _HttpParams;
                }


                _Observable = _HttpClient[method](this.URL, httpRequestOptions);
                break;

            case 'get':
            default:

                if (data) {
                    _HttpParams               = new HttpParams({
                                                                   fromObject: data
                                                               });
                    httpRequestOptions.params = _HttpParams;
                }

                _Observable = _HttpClient[method](this.URL, httpRequestOptions);
                break;
        }

        return _Observable
            .pipe(
                tap(resp => {
                }),
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
