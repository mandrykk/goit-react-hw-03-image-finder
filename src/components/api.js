const API_URL = 'https://pixabay.com/api/';
const API_KEY = '24658452-c9a73396c36aa22aa8e7e136d';

export default function fetchApi(searchInfo, page) {
  return fetch(
    `${API_URL}?q=${searchInfo}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Not found`));
  });
}