export const DELETE_USER = "DELETE_USER";
export const SEARCH_USER = "SEARCH_USER";
export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";

export function setUsers(users) {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    }
}

export function deleteUser(user) {
    return {
        type: 'DELETE_USER',
        payload: {
            user
        }
    }
}

export function searchUser(searchText) { 
    return {
        type: 'SEARCH_USER',
        payload: {
            searchText
        }
    }
}

export function addUser(user) { 
    return {
        type: 'ADD_USER',
        payload: {
            user
        }
    }
}