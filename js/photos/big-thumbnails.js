import {isEscapeKey} from '../util.js';
import {resetBigPicture,fillBigPictureTemplate} from './showingCommentsInModal.js';
import './controle-form-thumnail.js';

const picturesContainer = document.querySelector('.pictures'); //родительский  контейнер-вешаем событие (делегирование)
const pictureBig = document.querySelector('.big-picture'); // 'элемент который показывать при клике'
const counterShowComment = document.querySelector('.social__comment-shown-count');
counterShowComment.innerHTML = ''; //записываем два статичных комментария
const closePictureBig = document.querySelector('.big-picture__cancel');//'элемент закрытия большого фото'
const body = document.querySelector('body');

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureBigImage ();
  }
}

function openPictureBigImage() {
  pictureBig.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  body.classList.add('modal-open');
}

export function initializeBigPhoto(photosData) {
  picturesContainer.addEventListener('click', ({target}) => {

    if(target.closest('.picture')){
      const cardId = target.closest('.picture').dataset.id;
      const photoObject = photosData.find((card) => Number(card.id) === Number(cardId));

      fillBigPictureTemplate(photoObject);
      openPictureBigImage();
    }
  });
}

function closePictureBigImage() {
  pictureBig.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetBigPicture();
}

closePictureBig.addEventListener('click', () => {
  closePictureBigImage();
});
