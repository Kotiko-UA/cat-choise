import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_CS9JGhlT1Lg9NL1vNlkHXdy89ch6G7SfoE9iWYoNoIY9D42Pf4PIfChAtyCwLHiF';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
export function fetchBreeds() {
  return axios.get(`/breeds/`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
