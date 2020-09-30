import React from "react";

export default function Details({ album }) {
  return (
    <div className="px-4">
      <h2 className="text-blue-800 font-bold text-2xl"> {album.title}</h2>
      <img alt="" src={album.photos.data[0].url}></img>
    </div>
  );
}
