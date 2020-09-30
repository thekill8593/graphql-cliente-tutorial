import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALBUMS } from "../graphql/album";
import Album from "./Album";
import CreateAlbum from "./CreateAlbum";
import Details from "./Details";

export default function Albums() {
  const { loading, data } = useQuery(GET_ALBUMS);
  const [albumDetails, setAlbumDetails] = useState(null);

  function handleCallback(album) {
    setAlbumDetails(album);
  }

  function renderAlbums() {
    return data.albums.data.map((album) => {
      return (
        <Album
          key={album.id}
          title={album.title}
          albumId={album.id}
          clickCallback={handleCallback}
        ></Album>
      );
    });
  }

  return (
    <React.Fragment>
      {loading ? (
        <p>cargando.....</p>
      ) : (
        <div className="flex">
          <div className="w-6/12">
            <ul className="text-blue-500">{renderAlbums()}</ul>
            <CreateAlbum></CreateAlbum>
          </div>
          <div className="w-6/12">
            {albumDetails && <Details album={albumDetails}></Details>}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
