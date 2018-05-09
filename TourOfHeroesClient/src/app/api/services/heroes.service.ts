/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { Hero } from '../models/hero';
@Injectable()
class HeroesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  ApiV1HeroesGetResponse(): Observable<HttpResponse<Array<Hero>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/Heroes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Array<Hero> = null;
        _body = _resp.body as Array<Hero>;
        return _resp.clone({body: _body}) as HttpResponse<Array<Hero>>;
      })
    );
  }

  /**
   * @return Success
   */
  ApiV1HeroesGet(): Observable<Array<Hero>> {
    return this.ApiV1HeroesGetResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param hero undefined
   */
  ApiV1HeroesPostResponse(hero?: Hero): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = hero;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/Heroes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param hero undefined
   */
  ApiV1HeroesPost(hero?: Hero): Observable<void> {
    return this.ApiV1HeroesPostResponse(hero).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiV1HeroesByIdGetResponse(id: number): Observable<HttpResponse<Hero>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/Heroes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Hero = null;
        _body = _resp.body as Hero;
        return _resp.clone({body: _body}) as HttpResponse<Hero>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  ApiV1HeroesByIdGet(id: number): Observable<Hero> {
    return this.ApiV1HeroesByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `HeroesService.ApiV1HeroesByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `hero`:
   */
  ApiV1HeroesByIdPutResponse(params: HeroesService.ApiV1HeroesByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.hero;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/Heroes/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param params The `HeroesService.ApiV1HeroesByIdPutParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `hero`:
   */
  ApiV1HeroesByIdPut(params: HeroesService.ApiV1HeroesByIdPutParams): Observable<void> {
    return this.ApiV1HeroesByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  ApiV1HeroesByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/Heroes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id undefined
   */
  ApiV1HeroesByIdDelete(id: number): Observable<void> {
    return this.ApiV1HeroesByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

module HeroesService {

  /**
   * Parameters for ApiV1HeroesByIdPut
   */
  export interface ApiV1HeroesByIdPutParams {
    id: number;
    hero?: Hero;
  }
}

export { HeroesService }