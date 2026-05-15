
const SearchBar = ({search, setSearch}) => {

  return (
    <input type="text" 
           placeholder="Search transactions"
           className="border w-full p-3 rounded-lg mb-5"
           value={search} 
           onChange = {(e) => setSearch(e.target.value)}/>
  )       
}

export default SearchBar