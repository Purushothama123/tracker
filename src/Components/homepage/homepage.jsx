import React, { useState } from "react";
import MenuBar from "../loginpage/header";
import Footer from "../loginpage/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Userslist from "./usersdata";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search by name"
      />
      {searchValue && (
        <FontAwesomeIcon
          icon={faTimes}
          className="search-icon"
          onClick={clearSearch}
        />
      )}
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <div>
        <MenuBar />
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <Userslist />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
