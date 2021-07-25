import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { UserListRequestAction, UserListRequestError, UserListSuccessAction } from '../actions/user-action';
import { getUser,getError, getUserLoaded, getUserLoading, RootReducersState } from '../reducers';
import { ApiService } from '../serive/api.service';
import { User } from '../user';
import {take} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store:Store<RootReducersState>,private _apiSerive:ApiService) { }

  getUser(face=false):[Observable<Boolean>,Observable<User[]>,Observable<Boolean>]{
    const loaded$ = this.store.select(getUserLoaded);
    const loading$ = this.store.select(getUserLoading);
    const getUserdata$= this.store.select(getUser);
    const getUserError$ = this.store.select(getError);
    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((data:any)=>{
      if((!data[0] && !data[1]) || face){
      this.store.dispatch(new UserListRequestAction());
      this._apiSerive.userList().subscribe((data:any)=>{
       this.store.dispatch(new UserListSuccessAction({data:data}));
      },(error:any)=>{
        this.store.dispatch(new UserListRequestError())
      }
      )
          
      }
    })
  return [loading$,getUserdata$,getUserError$]
  }
}
