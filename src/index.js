import { fetchBreeds, fetchCatByBreed } from './cat-api';

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
