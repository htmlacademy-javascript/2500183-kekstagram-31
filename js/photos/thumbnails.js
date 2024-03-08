import {createPhotos} from '../stubs.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

for (let i = 0; i < createPhotos.length; i++) {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = createPhotos[i].url;
  image.description = createPhotos[i].description;
  thumbnail.querySelector('.picture__likes').textContent = createPhotos[i].likes;
  thumbnail.querySelector('.picture__comments').textContent = createPhotos[i].comments.length;
  fragment.appendChild(thumbnail);
}
container.appendChild(fragment);
