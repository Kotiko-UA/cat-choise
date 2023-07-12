import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_CS9JGhlT1Lg9NL1vNlkHXdy89ch6G7SfoE9iWYoNoIY9D42Pf4PIfChAtyCwLHiF';

const CAT_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export function fetchCatByBreed(breedId) {
  return fetch(`${CAT_URL}${breedId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
