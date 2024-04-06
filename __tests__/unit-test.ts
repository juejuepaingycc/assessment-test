
import {
  fullNameSearchFunc,
  fuzzySearchByNameFunc,
  sortByRankDescending,
  sortByRankAscending,
  sortByNameDescending,
} from '../src/utils/funcs';
import {
  MOCK_FULL_NAME_SEARCH_DATA,
  MOCK_EXPECTED_RESULT_FULL_NAME_SEARCH_DATA,
  MOCK_FUZZY_SEARCH_DATA,
  MOCK_EXPECTED_FUZZY_SEARCH_DATA,
  MOCK_SORT_DATA,
  MOCK_EXPECTED_RANK_DESCENDING_DATA,
  MOCK_EXPECTED_RANK_ASCENDING_DATA,
  MOCK_EXPECTED_NAME_DESCENDING_DATA
} from "../src/data";

describe('FullNameSearch function', () => {

  test('should return top ten users sorted by bananas count rank in descending(highest to lowest) when a matching user is found (should sort items alphabetically by name when bananas count is the same)', () => {
    const searchQuery = 'Jue Jue Paing';
    const {topRankUsers, matchingUser} = fullNameSearchFunc(MOCK_FULL_NAME_SEARCH_DATA, searchQuery);
    expect(topRankUsers).toEqual(MOCK_EXPECTED_RESULT_FULL_NAME_SEARCH_DATA);
    expect(matchingUser).toEqual(MOCK_EXPECTED_RESULT_FULL_NAME_SEARCH_DATA[1]);
  });

  test('should return NULL if no matching users are found', () => {
    const searchQuery = 'Testing';
    const {topRankUsers, matchingUser} = fullNameSearchFunc(MOCK_FULL_NAME_SEARCH_DATA, searchQuery);
    expect(topRankUsers).toEqual(null);
    expect(matchingUser).toEqual(null);
  });


});

describe('FuzzySearchByName Function', () => {
  test('should return an array of top 10 users whose names match the partialName in a case-insensitive manner, sorted by rank descending (should sort items alphabetically by name when bananas count is the same)', () => {
    // Partial name to search for
    const partialName = 'jo';

    const result = fuzzySearchByNameFunc(MOCK_FUZZY_SEARCH_DATA, partialName);
    expect(result).toEqual(MOCK_EXPECTED_FUZZY_SEARCH_DATA);
  });

  test('should return an empty array if no matching users are found', () => {
    // Partial name to search for
    const partialName = 'xyz'; // No user's name contains 'xyz'

    const result = fuzzySearchByNameFunc(MOCK_FUZZY_SEARCH_DATA, partialName);

    // Expect the result to be an empty array
    expect(result).toEqual([]);
  });
});

describe('SortByRankDescending function', () => {

  test('should sort users by bananas count in descending order (should sort items alphabetically by name when bananas count is the same)', () => {
    const descendingRankArray = MOCK_SORT_DATA.sort(sortByRankDescending);
    expect(descendingRankArray).toEqual(MOCK_EXPECTED_RANK_DESCENDING_DATA);
  });

});

describe('SortByRankAscending function', () => {

  test('should sort users by bananas count in ascending order (should sort items alphabetically by name when bananas count is the same)', () => {
    const ascendingRankArray = MOCK_SORT_DATA.sort(sortByRankAscending);
    expect(ascendingRankArray).toEqual(MOCK_EXPECTED_RANK_ASCENDING_DATA);
  });

});

describe('SortByNameDescending function', () => {

  test('should sort users by name in descending order', () => {
    const descendingNameArray = MOCK_SORT_DATA.sort(sortByNameDescending);
    expect(descendingNameArray).toEqual(MOCK_EXPECTED_NAME_DESCENDING_DATA);
  });

});