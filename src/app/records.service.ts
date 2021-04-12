import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
    return [
      {
        name: 'Humayun',
        online: true
      }, {
        name: 'Kabir',
        online: false
      }, {
        name: 'Musa',
        online: true
      }
    ]
  }
}
