import { useContext } from "react";

import { DataContext } from "../context/DataContext.js";
import GalleryItem from "./GalleryItem";

function Gallery(props) {
  // const data = useContext(DataContext)
  // console.log(data)

  const display = props.data.map((song, index) => {
    return <GalleryItem song={song} key={index} />;
  });

  return <div>{display}</div>;
}

export default Gallery;
