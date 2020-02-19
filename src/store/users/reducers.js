import {  SET_USERS, DELETE_USER, SEARCH_USER, ADD_USER } from './actions';

const INITIAL_STATE = {
    users: [],
	usersBackup: []
}

function usersReducer(state = INITIAL_STATE, action) {

    if(action.type === SET_USERS){
        
        return {
            users: action.payload.users,
            usersBackup: action.payload.users
        };
    }

    if(action.type === DELETE_USER){
        const  { user } = action.payload;
        const users = state.users.filter(u => {
			return u.id != user.id;
        });

        const usersBackup = state.usersBackup.filter(u => {
			return u.id != user.id;
		});
        
        return {
            users,
            usersBackup
        };
    }

    if(action.type === SEARCH_USER) {
        const { searchText } = action.payload;
        let users = [];

		if(!searchText || /^\s*$/.test(searchText)) {
			users = state.usersBackup;
		} else {
			users = state.usersBackup.filter(({ name, username }) => {
				return name.includes(searchText) || username.includes(searchText);
			});
        }

        return {
            ...state,
            users
        }
    }

    if(action.type === ADD_USER) {
        const  { user } = action.payload;
        let { users, usersBackup } = state;
        
        users = [...users, user];
        usersBackup = [...users];
        
        return {
            users, 
            usersBackup
        }
    }

    return state;
}

export default usersReducer;