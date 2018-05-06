import { Injectable } from '@angular/core';
import { IElementData } from '../interfaces/element-data';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  elementsList: IElementData[];
  private dataURL = '../../assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getElements() {
    return this.httpClient.get(this.dataURL);
  }

}
