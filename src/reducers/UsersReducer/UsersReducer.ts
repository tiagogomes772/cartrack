import { handleActions } from 'redux-actions';
import { UserStore } from './UsersReducer.types';

const initialUserReducer: UserStore = {
    fetchingData: false,
    users: [],
};

const UsersReducer = handleActions<any>(
    {
        REQUEST_USERS: (store: UserStore) => ({
            ...store,
            fetchingData: true,
        }),
        RESPONSE_USERS_FAILURE: (store: UserStore) => ({
            ...store,
            fetchingData: false,
        }),
        RESPONSE_USERS_SUCCESS: (store: UserStore, action: any) => {
            return ({
                ...store,
                users: action.payload.users,
                fetchingData: false,
            });
        },
    },
    initialUserReducer,
);

export default UsersReducer;