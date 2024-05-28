import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Buscar..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
