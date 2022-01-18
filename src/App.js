// App.js
import { useState, useRef } from "react";
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState([]);
  let termRef = useRef("");


  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault();
    // setSearch(term);
    const fetchData = async () => {
      document.title = `${term} Music`;
      const response = await fetch(API_URL + term);
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not Found");
      }
    };
    fetchData();
  };

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          termRef: termRef,
          handleSearchRef: handleSearch,
        }}
      >
        <Searchbar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
