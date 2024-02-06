import sortData from './sortData';
import searchFunction from './searchFunction';

function sortAndSearch(data, key, searchTerm, order = 'asc') {
  // First, perform the search
  const searchResults = searchFunction(data, searchTerm);

  // Next, sort the search results
  const sortedResults = sortData(searchResults, key, order);

  return sortedResults;
}

export default sortAndSearch;