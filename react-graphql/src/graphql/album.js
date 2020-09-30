import { gql } from "@apollo/client";

export const GET_ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
      }
    }
  }
`;

export const GET_ALBUM = gql`
  query($id: ID!) {
    album(id: $id) {
      id
      title
      photos {
        data {
          url
        }
      }
    }
  }
`;

export const CREATE_ALBUM = gql`
  mutation CreateAlbum($title: String!, $userId: ID!) {
    createAlbum(input: { title: $title, userId: $userId }) {
      id
      title
    }
  }
`;
