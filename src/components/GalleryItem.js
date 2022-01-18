// Gallerysong.js
import { useState } from "react";

function Gallerysong(props) {
  let [view, setView] = useState(false);

  const simpleStyle = {
    width: "25vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
  };

  const detailStyle = {
    width: "80vw",
    height: "20vh",
    border: "1px solid black",
    margin: "2px",
    backgroundImage: `url(${props.song.artworkUrl100})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "yellow",
  };

  const simpleView = () => {
    return (
      <div style={simpleStyle}>
        <h3>{props.song.trackName}</h3>
        <h4>{props.song.collectionName}</h4>
        <img src={props.song.artworkUrl100} />
      </div>
    );
  };

  const detailView = () => {
    return (
      <div style={detailStyle}>
        <h2>{props.song.trackName}</h2>
        <h3>{props.song.collectionName}</h3>
        <h4>{props.song.primaryGenreName}</h4>
        <h4>{props.song.releaseDate}</h4>
      </div>
    );
  };

  return (
    <div onClick={() => setView(!view)} style={{ display: "inline-block" }}>
      // This simple ternary shows the simple view when 'view' is false!
      {view ? detailView() : simpleView()}
    </div>
  );
}
export default Gallerysong;
