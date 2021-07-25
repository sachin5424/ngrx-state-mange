import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { UserListRequestAction, UserListSuccessAction } from '../actions/user-action';
import { getUser, getUserLoaded, getUserLoading, RootReducersState } from '../reducers';
import { ApiService } from '../serive/api.service';
import { UserService } from '../serive/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user:any =[];
  loading:any
  error:any
  constructor(private _apiSerive:ApiService,private store:Store<RootReducersState>,private UserSerive:UserService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    const observer$ = this.UserSerive.getUser()
    const userData$ = observer$[1]
    const loading$ = observer$[0]
    const error$ = observer$[2]

    userData$.subscribe((data)=>{
      this.user = data
    })
    loading$.subscribe(data=>{
      this.loading= data
    })
    error$.subscribe(data=>{
      this.error = data
    })
    // const loaded$ = this.store.select(getUserLoaded)
    // const loading$ = this.store.select(getUserLoading)
    // const getUserdata$ = this.store.select(getUser)
    // combineLatest([loaded$, loading$]).subscribe((data:any)=>{
    //   if(!data[0] && !data[1]){
    //   console.log(data,'com');
    //   this.store.dispatch(new UserListRequestAction());
    //   this._apiSerive.userList().subscribe((data:any)=>{
    //    this.store.dispatch(new UserListSuccessAction({data:data}));
    //   })
          
    //   }
    // })
   
    // this.store.select(getUser).subscribe((data)=>{
    //   console.log(data);
      
    //    this.user = data
    // })
  }
}
