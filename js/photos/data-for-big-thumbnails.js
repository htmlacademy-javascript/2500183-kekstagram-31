const counterLike = document.querySelector('.likes-count');//количество статичных лайков
const counterFullComment = document.querySelector('.social__comment-total-count');
const descriptionBigPicture = document.querySelector('.social__caption');// блок с описанием фоторграфии
const socialCommentCount = document.querySelector('.social__comment-count');//счетчик комментариев
const commentsLoader = document.querySelector('.comments-loader');// кнопка загрузить еще
const pictureBigImg = document.querySelector('.big-picture__img > img');//'элемент в который нужно записать путь'
const fragmentComment = document.createDocumentFragment();
const listCommentsBigPicture = document.querySelector('.social__comments');// контейнер куда вставлять элементы списка комментариев
const сommentElemBigPicture = document.querySelector('.social__comment');

function createComment(commentData) {
  const templateComment = сommentElemBigPicture.cloneNode(true);
  templateComment.querySelector('.social__picture').src = commentData.avatar;
  templateComment.querySelector('.social__picture').alt = commentData.name;
  templateComment.querySelector('.social__text').innerHTML = '';
  templateComment.querySelector('.social__text').textContent = commentData.message;
  return templateComment;
}

function resetDataBigPicture() {
  counterLike.innerHTML = '';// обнуляем лайки
  counterFullComment.innerHTML = '';
  descriptionBigPicture.innerHTML = '';
}

function fillBigPictureCommentsTemplate(commentsData) {
  commentsData.forEach((item) => {
    const commentsTempalte = createComment(item);
    fragmentComment.appendChild(commentsTempalte);
  });
  listCommentsBigPicture.innerHTML = '';
  listCommentsBigPicture.appendChild(fragmentComment);
}

function fillBigPictureTemplate({url, likes, comments, description }) {
  socialCommentCount.classList.add('hidden'); // убираю счетчик комментов
  commentsLoader.classList.add('hidden');

  pictureBigImg.src = url;
  counterLike.textContent = likes;
  counterFullComment.textContent = comments.length;
  descriptionBigPicture.textContent = description;

  fillBigPictureCommentsTemplate(comments);
}

export {resetDataBigPicture,fillBigPictureTemplate};
