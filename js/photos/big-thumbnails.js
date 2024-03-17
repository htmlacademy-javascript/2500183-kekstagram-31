import {photoData} from '../stubs.js';
import {isEscapeKey} from '../util.js';
import {resetDataBigPicture,fillBigPictureTemplate} from './data-for-big-thumbnails.js';

const picturesContainer = document.querySelector('.pictures'); //родительский  контейнер-вешаем событие (делегирование)
const pictureBig = document.querySelector('.big-picture'); // 'элемент который показывать при клике'
const counterShowComment = document.querySelector('.social__comment-shown-count');
counterShowComment.textContent = 2; //записываем два статичных комментария
const closePictureBig = document.querySelector('.big-picture__cancel');//'элемент закрытия большого фото'
const body = document.querySelector('body');

resetDataBigPicture ();

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureBigImage ();
  }
}

function openPictureBigImage () {
  pictureBig.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  body.classList.add('modal-open');
}

function getPictureData ({target}) {
  const cardId = target.closest('.picture').dataset.id;
  return photoData.find((card) => Number(card.id) === Number(cardId));
}

picturesContainer.addEventListener('click', (evt) => {
  if(!evt.target.closest('.picture__img')) {
    return;
  }

  fillBigPictureTemplate (getPictureData(evt));
  openPictureBigImage ();
});

function closePictureBigImage () {
  pictureBig.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closePictureBig.addEventListener('click', () => {
  closePictureBigImage ();
});

