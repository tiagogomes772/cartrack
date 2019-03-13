import { createActions } from 'redux-actions';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const {
    requestUsers,
    responseUsersFailure,
    responseUsersSuccess,
} = createActions({
        RESPONSE_USERS_SUCCESS: (users: any) => ({users}),
    },
    'REQUEST_USERS',
    'RESPONSE_USERS_FAILURE',
);

export const getUsers = async (): Promise<any> => (dispatch: any): Promise<any> => {
    dispatch(requestUsers());

    return fetch(URL).then((response: any) => {
        if(response.ok) {
            return response.json();
        } else {
            return dispatch(responseUsersFailure());
        }
    }).then((json: any) => {
        if (json && json.type === 'RESPONSE_USERS_FAILURE') {
            return json;
        } else {
            return dispatch(responseUsersSuccess(json));
        }
    })
};