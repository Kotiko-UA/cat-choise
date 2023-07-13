import { fetchBreeds, fetchCatByBreed } from './cat-api';
import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_CS9JGhlT1Lg9NL1vNlkHXdy89ch6G7SfoE9iWYoNoIY9D42Pf4PIfChAtyCwLHiF';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
const refs = {
  selectBreesd: document.querySelector('.breed-select'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
  infoCatEl: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(data => {
    addSelectMarkup(data);
  })
  .catch(err => console.log(err));

function addSelectMarkup(data) {
  const selectMarkup = data
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  refs.selectBreesd.innerHTML = selectMarkup;
}

refs.selectBreesd.addEventListener('change', addCatsMarkup);

function addCatsMarkup(e) {
  fetchCatByBreed(e.target.value)
    .then(cat => console.log(cat))
    .catch(err => console.log(err));
}
