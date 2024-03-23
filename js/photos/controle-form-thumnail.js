import {isEscapeKey} from '../util.js';
import {shrinkValueScale,increaseValueScale} from './change-scale-thumbnail.js';
import './change-effects-thumbnails.js';
import './check-validate-form.js';

const buttonControlSmaller = document.querySelector('.scale__control--smaller');//кнопка уменьшения масштаба
const buttonControlBigger = document.querySelector('.scale__control--bigger');//кнопка увеличения масштаба
const imageFormPicture = document.querySelector('.img-upload__overlay');// элемент показа формы - убрать класс hiden
const uploadInputPicture = document.querySelector('.img-upload__input');// загрузка файлов, повесить событие изменения этого поля!
const body = document.querySelector('body');
const closeImageFormPicture = document.querySelector('.img-upload__cancel');// элемент закрытия формы (крестик)

function onDocumentKeydownForm(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormPicture ();
  }
}

function showFormPicture() {
  imageFormPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydownForm);
}

function closeFormPicture() {
  imageFormPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydownForm);
}

uploadInputPicture.addEventListener('change', () => {
  showFormPicture();
});

closeImageFormPicture.addEventListener('click', () => {
  closeFormPicture();
});

buttonControlSmaller.addEventListener('click', () => {
  shrinkValueScale();
});

buttonControlBigger.addEventListener('click', () => {
  increaseValueScale();
});
