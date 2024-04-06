import { UserDataItem } from "stores/types";

export const sortByRankDescending = (a : UserDataItem, b : UserDataItem) => {
    // First, compare by bananas in descending order
    if (b.bananas !== a.bananas) {
      return b.bananas - a.bananas;
    } else {
      // if bananas count is same, order alphabetically
      return a.name.localeCompare(b.name);
    }
}

export const sortByRankAscending = (a : UserDataItem, b : UserDataItem) => {
  // First, compare by bananas in ascending order
  if (b.bananas !== a.bananas) {
    return a.bananas - b.bananas;
  } else {
    // if bananas count is same, order alphabetically
    return a.name.localeCompare(b.name);
  }
}

export const sortByNameDescending = (a : UserDataItem, b : UserDataItem) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameB > nameA) return -1;
  if (nameB < nameA) return 1;
  return 0;
}

export const fullNameSearchFunc = (dataArray : UserDataItem[], name : string) : ({topRankUsers : UserDataItem[] | null, matchingUser : UserDataItem | null}) => {
    // sort by rank descending
    const sortedArray = dataArray.sort(sortByRankDescending);

    const matchingUser : UserDataItem | undefined = sortedArray.find(item => item.name?.toLowerCase() === name.toLowerCase());

    // Name found
    if (matchingUser) {
      const topRankUsers : UserDataItem[] = sortedArray.slice(0, 10);

      let foundInTopList = false;

      for (let i = 0; i < topRankUsers.length; i++) {
        if (topRankUsers[i].uid === matchingUser?.uid) {
          foundInTopList = true;
          break;
        }
      }

      if (!foundInTopList) {
        // Replace latest index data with matching user
        topRankUsers[topRankUsers.length - 1] = matchingUser;
      }

      return {topRankUsers, matchingUser};
    } else {
     return {topRankUsers : null, matchingUser : null};
    }

}

export const fuzzySearchByNameFunc = (dataArray : UserDataItem[], partialName : string) : UserDataItem[] => {
  const regex = new RegExp(escapeRegExp(partialName), 'i');
  const fuzzySearchResult =  dataArray?.filter((item : UserDataItem) => regex.test(item.name));

   const sortedData = fuzzySearchResult.sort(sortByRankDescending);
   const topRankUsers : UserDataItem[] = sortedData.slice(0, 10);

   if (topRankUsers?.length > 0) {
       return topRankUsers;
   } else {
       return [];
   }
};

const escapeRegExp = (str: string) => {
 return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export const getCurrentTime = () => {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  if (hours < 12) {
      return "morning";
  }
  else if (hours < 18 || (hours === 18 && minutes === 0))
      {return "afternoon";}
  return "night";
};