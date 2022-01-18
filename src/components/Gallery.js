import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import GalleryItem from "./GalleryItem";

export default function Gallery(props) {
  const data = useContext(DataContext);
  const display = data.map((song, index) => {
    return (
      <div>
        <GalleryItem song={song} key={index} />
      </div>
    );
  });
  return <div>{display}</div>;
}
