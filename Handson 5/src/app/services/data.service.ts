import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get('https://jsonblob.com/api/1bb0d085-f9c4-11ea-a18d-ad24cbc85605');
  }
  

}
