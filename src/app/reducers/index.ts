import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as formUser from "./user-reducers";

export interface RootReducersState{
    users:formUser.UserReducerState;
}

export const rootReducer:ActionReducerMap<RootReducersState> = {
    users:formUser.userReducer
}

export const getUserState = (state:RootReducersState)=>state.users

export const getUserLoaded = createSelector(getUserState,formUser.getloaded)
export const getUserLoading = createSelector(getUserState,formUser.getloading)
export const getUser = createSelector(getUserState,formUser.getuser)
export const getError = createSelector(getUserState,formUser.geterror)