import { useLazyQuery } from "@apollo/client";
import React from "react";
import { GET_ALBUM } from "../graphql/album";

export default function Album({ title, albumId, clickCallback }) {
  const [getAlbum] = useLazyQuery(GET_ALBUM, {
    variables: { id: albumId },
    onCompleted({ album }) {
      clickCallback(album);
    },
  });
  return (
    <li className="cursor-pointer" onClick={() => getAlbum()}>
      {title}
    </li>
  );
}
