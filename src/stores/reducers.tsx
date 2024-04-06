import {
  SEARCH_NAME,
  UPDATE_USERS,
  FUZZY_SEARCH,
  SORT_USERS
  } from './actions';
import { USER_DATA } from 'data';
import { UserDataItem } from './types';
import {
  fullNameSearchFunc,
  fuzzySearchByNameFunc,
  sortByRankDescending,
  sortByRankAscending,
  sortByNameDescending,
} from 'utils/funcs';

const dataArray = Object.values(USER_DATA);
const descendingArray = dataArray.sort((a, b) => b.bananas - a.bananas);

  const initialState = {
    users : descendingArray,
    matchingUser : null
  }
  
  export function App(state = initialState, action : any) {
    switch (action.type) {
      case SEARCH_NAME: 
        const {topRankUsers, matchingUser} = fullNameSearchFunc(dataArray, action.name);

        if (topRankUsers) {
          return { ...state, users : topRankUsers, matchingUser };
        } else {
          // NO MATCHING NAME FOUND
          return { ...state, users : descendingArray, matchingUser : null}
        }

      case FUZZY_SEARCH: 
        const searachedUsers : UserDataItem[] = fuzzySearchByNameFunc(dataArray, action.name);

        if (searachedUsers?.length > 0) {
          return { ...state, users : searachedUsers, matchingUser : null };
        } else {
          // NO PARTIAL NAME FOUND
          return { ...state, users : [], matchingUser : null}
        }

      case UPDATE_USERS: 
        return { ...state, users : action.users, matchingUser : null };

      case SORT_USERS:
        if (action.order === "RANK_DESCENDING") {
          const descendingRankArray = state.users.sort(sortByRankDescending);
          return { ...state, users : descendingRankArray };
        } else if (action.order === "RANK_ASCENDING") {
          const ascendingRankArray = state.users.sort(sortByRankAscending);
          return { ...state, users : ascendingRankArray };
        } else {
          const descendingNameArray = state.users.sort(sortByNameDescending);
          return { ...state, users : descendingNameArray };
        }

      default:
        return state
    }
  }
  