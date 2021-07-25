import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string = "https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient) { }

  getApi(url:string){
   return this.http.get(this.BaseUrl+url)
  }
}
