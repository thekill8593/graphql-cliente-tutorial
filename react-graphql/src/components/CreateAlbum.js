import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_ALBUM } from "../graphql/album";

export default function CreateAlbum() {
  const [title, setTitle] = useState("");

  const [createAlbum] = useMutation(CREATE_ALBUM, {
    onCompleted(data) {
      console.log("creado", data);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createAlbum({
          variables: { title: title, userId: 1 },
        });
        setTitle("");
      }}
      className="mt-6"
    >
      <input
        type="text"
        className="py-2 px-2 w-48 border-gray-400 border-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button type="submit" className="px-2 py-2 bg-blue-700 text-white my-4">
        Create album
      </button>
    </form>
  );
}
