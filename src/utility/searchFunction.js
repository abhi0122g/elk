

const searchFunction = function(searchData,searchTerm){
    const searchResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return searchResults;
}

export default searchFunction;