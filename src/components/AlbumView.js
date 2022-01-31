// These components will be making separate API calls from the app
// component to serve specific data about a given album
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function AlbumView() {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setAlbumData(resData.results);
    };
    fetchData();
  }, [id]);


  const justSongs = albumData.filter(
    (entry) => entry.kind === "song"
  );
  const renderSongs = justSongs.map((song, i) => {
    return (
      <div key={i}>
      
          <p>{song.trackName}</p>
      
      </div>
    );
  });

  return (
    <div>
      {renderSongs}
    </div>
  );
}
export default AlbumView