const checkResponse = (res) => (res.ok
  ? res.json()
  : res.json()
    .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

export const getAllPosts = () =>
  fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/', {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => checkResponse(res));

export const getPostByID = (id) =>
  fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => checkResponse(res));
