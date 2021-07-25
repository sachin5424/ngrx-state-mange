import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpService:HttpService) { }

  userList(){
   return this._httpService.getApi('todos')
  }
}
