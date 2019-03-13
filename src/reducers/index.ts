import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer/UsersReducer";


export const combinedStore = combineReducers<any>({
    users: UsersReducer,
});

