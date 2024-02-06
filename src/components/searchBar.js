import { useDispatch,useSelector } from "react-redux";
import { searchValue } from '../redux/searchReducer';


const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm=useSelector((state)=> state.search.value);
  const data= useSelector((state)=> state.instanceList.data);
  const handleInputChange = (event) => {
    dispatch(searchValue(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onSearch callback function with the search term
    // onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
