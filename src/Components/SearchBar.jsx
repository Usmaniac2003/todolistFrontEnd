import Search from "../assets/search.png"
import "../Styles/SearchBar.scss"
const SearchBar = () => {
  return (
    <div className="search">
        <img src={Search} alt="" />
        <input type="text" placeholder="Search your tasks" />
    </div>
  )
}

export default SearchBar