import { UserDataItem } from "./types";

export const SEARCH_NAME = 'SEARCH_NAME';
export const UPDATE_USERS = 'UPDATE_USERS';
export const FUZZY_SEARCH = "FUZZY_SEARCH";
export const SORT_USERS = "SORT_USERS";

export function searchByName(name : string) {
    return { type : SEARCH_NAME, name }
}

export function sortUsers(order : string) {
    return { type : SORT_USERS, order }
}

export function fuzzySearchByName (name : string) {
    return { type : FUZZY_SEARCH, name }
}

export function updateUsers(users : UserDataItem[]) {
    return { type : UPDATE_USERS, users }
}
