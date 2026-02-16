/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, signal } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  pairwise,
  shareReplay,
  startWith,
  map as rxMap,
} from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { createRateAPIUrl } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class NetworkService {
  public readonly onlineSig = signal<boolean>(navigator.onLine);

  /** Stream of online state (true/false), deduped, hot, replays latest */
  public readonly online$: Observable<boolean> = merge(
    fromEvent(window, 'online').pipe(rxMap(() => true)),
    fromEvent(window, 'offline').pipe(rxMap(() => false))
  ).pipe(
    startWith(navigator.onLine),
    distinctUntilChanged(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** Emits once when we transition from offline -> online (debounced to avoid Wi-Fi flapping) */
  public readonly backOnline$: Observable<void> = this.online$.pipe(
    pairwise(),
    filter(([prev, curr]) => !prev && curr),
    debounceTime(2000),
    rxMap(() => void 0)
  );

  constructor(private http: HttpClient) {
    this.online$.subscribe((v) => this.onlineSig.set(v));
  }

  /**
   * Public getter to check if the app is currently online.
   */
  public isOnline(): boolean {
    return this.onlineSig();
  }

  private createOptions(options?: any): any {
    if (!options?.loaderKey) return options;
    const { loaderKey, headers, ...rest } = options;
    const h =
      headers instanceof HttpHeaders ? headers : new HttpHeaders(headers || {});
    return { ...rest, headers: h.set('X-Loader-Key', loaderKey) };
  }

  get(url: string, params?: HttpParams, options?: any): Observable<any> {
    return this.http
      .get<any>(url, this.createOptions({ ...options, params }))
      .pipe(catchError(this.errorHandlerAsync));
  }

  getByIdAsync(url: string, options?: any): Observable<any> {
    return this.http
      .get<any>(url, this.createOptions(options))
      .pipe(catchError(this.errorHandlerMessageAsync));
  }

  getFile(url: string, options: any): Observable<any> {
    return this.http
      .get<any>(url, this.createOptions(options))
      .pipe(catchError(this.errorHandlerMessage));
  }

  postAsync(url: string, model: any, options?: any): Observable<any> {
    return this.http
      .post<any[]>(url, model, this.createOptions(options))
      .pipe(catchError(this.errorHandlerAsync));
  }

  onUpdateAsync(url: string, model: any, options?: any): Observable<any> {
    return this.http
      .put<any[]>(url, model, this.createOptions(options))
      .pipe(catchError(this.errorHandler));
  }

  onPatch(url: string, model: any, options?: any): Observable<any> {
    return this.http
      .patch<any[]>(url, model, this.createOptions(options))
      .pipe(catchError(this.errorHandler));
  }

  onDeleteAsync(url: string, options?: any): Observable<any> {
    return this.http
      .delete<any[]>(url, this.createOptions(options))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandlerAsync = (err: HttpErrorResponse) => {
    return throwError(() => (err?.error ?? err));
    //return throwError(() => normalizeError(err));
  };

  private errorHandlerMessageAsync = (err: HttpErrorResponse) => {
    return throwError(() => (err?.error ?? err));
    //return throwError(() => normalizeError(err));
  };

  getAll(url: string, params?: object, options?: any): Promise<any> {
    return this.http
      .get<any>(url, params)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  getById(url: string, options?: any): Promise<any> {
    return this.http
      .get<any>(url, options)
      .pipe(catchError(this.errorHandlerMessage))
      .toPromise();
  }

  post(url: string, model: any, options?): Promise<any> {
    return this.http
      .post<any[]>(url, model, options)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  onUpdate(url: string, model: any, options?): Promise<any> {
    return this.http
      .put<any[]>(url, model, options)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  onDelete(url: string, options?): Promise<any> {
    return this.http
      .delete<any[]>(url, options)
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }

  errorHandler = (err: HttpErrorResponse): Promise<any> => {
    return Promise.reject(err?.error ?? err);
    //return throwError(() => normalizeError(err)).toPromise();
  };

  errorHandlerMessage = (err: HttpErrorResponse): Promise<any> => {
    return Promise.reject(err?.error ?? err);
    //return throwError(() => normalizeError(err)).toPromise();
  };

  // getMetalRate(url: string, model: any, options?): Promise<any> {
  //   return this.http
  //     .post<any[]>(createRateAPIUrl(url), model, options)
  //     .pipe(catchError(this.errorHandler))
  //     .toPromise();
  // }
}
