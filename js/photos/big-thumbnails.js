import {photoData} from '../stubs.js';
import {isEscapeKey} from '../util.js';

const picturesContainer = document.querySelector('.pictures'); //родительский  контейнер-вешаем событие (делегирование)
const pictureBig = document.querySelector('.big-picture'); // 'элемент который показывать при клике'
const pictureBigSrc = document.querySelector('.big-picture__img > img');//'элемент в который нужно записать путь'
const counterLike = document.querySelector('.likes-count');//количество статичных лайков
counterLike.innerHTML = '';// обнуляем лайки
const counterFullComment = document.querySelector('.social__comment-total-count');//находим количество  всех статичных комментариев
counterFullComment.innerHTML = '';// обнуляем количество всех лайков
const counterShowComment = document.querySelector('.social__comment-shown-count');
counterShowComment.innerHTML = 2; //записываем два статичных комментария
const closePictureBig = document.querySelector('.big-picture__cancel');//'элемент закрытия большого фото'
const listCommentsBigPicture = document.querySelector('.social__comments');// контейнер куда вставлять элементы списка комментариев
const сommentElemBigPicture = document.querySelector('.social__comment');
const fragmentComment = document.createDocumentFragment();
const descriptionBigPicture = document.querySelector('.social__caption');// блок с описанием фоторграфии
descriptionBigPicture.innerHTML = '';
const socialCommentCount = document.querySelector('.social__comment-count');//счетчик комментариев
const commentsLoader = document.querySelector('.comments-loader');// кнопка загрузить еще
const body = document.querySelector('body');

function createComment (commentData) {
  const templateComment = сommentElemBigPicture.cloneNode(true);
  templateComment.querySelector('.social__picture').src = commentData.avatar;
  templateComment.querySelector('.social__picture').alt = commentData.name;
  templateComment.querySelector('.social__text').innerHTML = '';
  templateComment.querySelector('.social__text').innerHTML = commentData.message;
  return templateComment;
}

function renderComments(commentsData) {
  commentsData.forEach((item) => {
    const commentsTempalte = createComment(item);
    fragmentComment.appendChild(commentsTempalte);
  });
  listCommentsBigPicture.innerHTML = '';
  listCommentsBigPicture.appendChild(fragmentComment);
}

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

picturesContainer.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture__img')) {
    pictureBigSrc.src = evt.target.closest('.picture__img').src;
    const cardId = evt.target.closest('.picture').dataset.id;
    const cardData = photoData.find((card) => Number(card.id) === Number(cardId));
    counterLike.textContent = Number(cardData.likes);
    counterFullComment.textContent = Number(cardData.comments.length);
    renderComments(cardData.comments);
    descriptionBigPicture.textContent = cardData.description;
    socialCommentCount.classList.add('hidden'); // убираю счетчик комментов
    commentsLoader.classList.add('hidden');
    openPictureBigImage ();
  }
});

function closePictureBigImage () {
  pictureBig.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closePictureBig.addEventListener('click', () => {
  closePictureBigImage ();
});

//console.log(isEscapeKey);
