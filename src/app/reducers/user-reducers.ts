import { User } from "../user";
import {Action} from '../actions';
import { USER_LIST_Error, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../actions/user-action";

export interface UserReducerState {
    loading:boolean
    loaded:boolean
    error:boolean
    user:User[];
}
const initialState:UserReducerState = {
    loaded:false,
    loading:false,
    error:false,
    user:[]
}

export function userReducer(state = initialState,action:Action){
    switch(action.type){
        case USER_LIST_REQUEST:{
            return {...state,loading:true}
        }
        case USER_LIST_Error:{
            return {...state,error:true}
        }
        case USER_LIST_SUCCESS:{
            const updateduser = state.user.concat(action.payload.data)
            return {...state,loading:false,loaded:true,user:updateduser}
        }
        default :{
            return state
        }
    }
}

// selector
export const getloaded = (state:UserReducerState)=>state.loaded
export const getloading = (state:UserReducerState)=>state.loading
export const getuser = (state:UserReducerState)=>state.user
export const geterror = (state:UserReducerState)=>state.error