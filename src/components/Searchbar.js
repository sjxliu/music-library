import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function Searchbar() {
  const { termRef, handleSearchRef } = useContext(SearchContext);
  return (
    <form>
      <input type="text" placeholder="Enter a search term here" termRef={termRef} />
      <button onClick={(e) => handleSearchRef(e, termRef.current.value)}>
        Submit
      </button>
    </form>
  );
}

export default Searchbar;
