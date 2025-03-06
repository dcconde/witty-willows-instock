import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

function SearchBar() {
  return (
    <section className="search-bar">
      <input
        type="text"
        name="searchInput"
        className="search-bar__input"
        placeholder="Search..."
      />
      <img src={searchIcon} alt="search icon" className="search-bar__icon" />
    </section>
  );
}

export default SearchBar;
