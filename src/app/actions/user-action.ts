import { User } from "../user";

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_FAILED = 'user list failed';
export const USER_LIST_Error = 'user list error';


export class UserListRequestAction{
    readonly type = USER_LIST_REQUEST
}


export class UserListRequestError{
    readonly type = USER_LIST_REQUEST
}


export class UserListSuccessAction{
    readonly type = USER_LIST_SUCCESS
    constructor(public payload?:{data:User[]}){

    }
}
