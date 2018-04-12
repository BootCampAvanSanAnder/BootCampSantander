import { Injectable } from '@angular/core';

@Injectable()
export class DummyService {

  constructor() { }

  public makeDummyCall(): void {
    console.log('Making a Dummy call!');
  }

}
