import { Injectable } from '@angular/core';
import { CepModel } from '../model/cep.model';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const VIA_CEP_URL = 'http://viacep.com.br/ws';
export const WRONG_CEP_URL = 'http://viacpe.com.br/ws';
export const LOCAL_MOCK_URL = 'assets/cep_mock.json';

export const CEP_SERVICE_URL = VIA_CEP_URL;
export const CEP_SERVICE_RESPONSE_TYPE = 'json';
export const CEP_SERVICE_RESPONSE_UNICODE = true;

@Injectable()
export class CepService {

  static getCEPUrl(
    cep: string,
    responseType: string = CEP_SERVICE_RESPONSE_TYPE,
    responseUnicode: boolean = CEP_SERVICE_RESPONSE_UNICODE
  ): string {
    let result = `${CEP_SERVICE_URL}/${cep}/${CEP_SERVICE_RESPONSE_TYPE}`;
    if (responseUnicode) {
      result += '/unicode';
    }

    return result;
  }

  static isMockUrl(): boolean {
    return CEP_SERVICE_URL.localeCompare(LOCAL_MOCK_URL) === 0;
  }

  static getMockUrl(): string {
    return `${CEP_SERVICE_URL}`;
  }

  public getCEP(cep: string): Promise<CepModel> {
    let getUrl;

    if (CepService.isMockUrl()) {
      getUrl = CepService.getMockUrl();
    } else {
      getUrl = CepService.getCEPUrl(cep);
    }

    return this.http
      .get(getUrl)
      .map((response) => response.json())
      .toPromise();
  }

  public getReactiveCEP(cep: string): Observable<CepModel> {
    let getUrl;

    if (CepService.isMockUrl()) {
      getUrl = CepService.getMockUrl();
    } else {
      getUrl = CepService.getCEPUrl(cep);
    }

    return this.http
      .get(getUrl)
      .map((response) => response.json());
  }

  constructor(
    public http: Http
  ) { }

}
