import "./App.css";
import { useEffect, useState, Suspense } from "react";
import Gallery from "./components/Gallery";
import Searchbar from "./components/Searchbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtistView from "./components/ArtistView";
import AlbumView from "./components/AlbumView";
import Loader from "./components/Loading";
import { useSelector, useDispatch, connect } from "react-redux";
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'


function App(props) {
  let [searchTerm, setSearchTerm] = useState("");
  // let [data, setData] = useState([]);
  let [message, setMessage] = useState("Search for Music!");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  // const API_URL = `https://itunes.apple.com/search?term=`;

  useEffect(() => {
    dispatch(fetchData());
  }, [props.objectId, dispatch]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     document.title = `${searchTerm} Music`;
  //     const fetchData = async () => {
  //       const response = await fetch(API_URL + searchTerm);
  //       const resData = await response.json();
  //       if (resData.results.length > 0) {
  //         setData(resData.results);
  //       } else {
  //         setMessage("Not Found");
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(term);
  };

  const renderGal = () => {
    if (data.apiData) {
      return (
        <img
          style={{ width: "100vw" }}
          src={data.apiData.primaryImage}
          alt={data.apiData.title}
        />
      );
    } else {
      return <p>image here</p>;
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input
        value={data.objectId}
        onChange={(e) => {
          dispatch(inputId(Number(e.target.value)));
        }}
      />
      <div>
        {data.objectId}
        {renderGal()}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  objectId: state.data.objectId,
});

export default connect(mapStateToProps)(App);

// export default App;
