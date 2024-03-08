import {createPhotos} from '../stubs.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

createPhotos.forEach((photos) => { // как избежать стрелочной функции, ведь ругается lint, если сделать по-старой записи
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = photos.url;
  image.description = photos.description;
  thumbnail.querySelector('.picture__likes').textContent = photos.likes;
  thumbnail.querySelector('.picture__comments').textContent = photos.comments.length;
  fragment.appendChild(thumbnail);
});
container.appendChild(fragment);
