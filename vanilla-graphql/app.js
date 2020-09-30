window.addEventListener("load", () => {
  getAlbums();
});

const endpoint = "https://graphqlzero.almansi.me/api";

function getAlbums() {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{
            albums {
              data {
                id
                title
              }
            }
          }`,
    }),
  })
    .then((res) => res.json())
    .then((data) => renderList(data.data.albums));
}

function getAlbum(id) {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{
              album(id: ${id}) {
                id
                title
                photos {
                    data {
                        url
                    }
                }
              }
            }`,
    }),
  })
    .then((res) => res.json())
    .then((data) => renderDetails(data.data.album));
}

function renderList(albums) {
  const list = document.querySelector("#albums-list");
  albums.data.forEach((album) => {
    createListElement(list, album);
  });
}

function createListElement(list, album) {
  const item = document.createElement("li");
  item.classList.add("cursor-pointer");
  item.addEventListener("click", () => getAlbum(album.id));
  item.innerText = album.title;
  list.appendChild(item);
}

function renderDetails(album) {
  const details = document.querySelector("#details");
  details.innerHTML = "";
  const image = document.createElement("img");
  image.src = album.photos.data[0].url;
  const title = document.createElement("h2");
  title.classList.add("text-xl", "text-blue-700", "mb-2");
  title.innerText = album.title;
  details.appendChild(title);
  details.appendChild(image);
}

function createAlbum() {
  const userId = 1;
  const title = "nuevo item";
  fetch(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
                createAlbum(input: {
                title: "${title}"
                userId: ${userId}
            }) {
                id
                title
            }
        }`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const list = document.querySelector("#albums-list");
      createListElement(list, data.data.createAlbum);
    });
}
