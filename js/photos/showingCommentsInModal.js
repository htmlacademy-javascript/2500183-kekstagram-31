const fragmentComment = document.createDocumentFragment();

const bigPicture = document.querySelector('.big-picture');
const socialCommentTemplate = bigPicture.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let loadingCommentsStep = 5;

function createComment({avatar, name, message}) {
  const template = socialCommentTemplate.cloneNode(true);

  template.querySelector('.social__picture').src = avatar;
  template.querySelector('.social__picture').alt = name;
  template.querySelector('.social__text').innerHTML = '';
  template.querySelector('.social__text').textContent = message;
  template.classList.add('hidden');

  return template;
}

function resetBigPicture() {
  loadingCommentsStep = 5;

  bigPicture.querySelector('.social__comments').innerHTML = '';
  bigPicture.querySelector('.social__comment-shown-count').textContent = 5;
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
}

function fillBigPictureCommentsTemplate(commentsData) {
  commentsData.forEach((item) => {
    const commentsTempalte = createComment(item);
    fragmentComment.appendChild(commentsTempalte);
  });
  bigPicture.querySelector('.social__comments').appendChild(fragmentComment);
}

function getCommentsChunk(counterStep) {
  const commentsNodes = bigPicture.querySelectorAll('.social__comment');
  const comments = Array.from(commentsNodes).slice(0, counterStep);

  return {
    comments,
    commentsNodes
  };
}

function showComments(counterStep) {
  const { comments } = getCommentsChunk(counterStep);

  comments.forEach((comment) => comment.classList.remove('hidden'));
}

function updateCommentsCount(counterStep) {
  const { comments, commentsNodes } = getCommentsChunk(counterStep);

  bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length;
  bigPicture.querySelector('.social__comment-total-count').textContent = commentsNodes.length;
}

function onCommentsLoaderClick() {
  loadingCommentsStep += 5;

  showComments(loadingCommentsStep);
  updateCommentsCount(loadingCommentsStep);
}

function fillBigPictureTemplate({url, likes, comments, description }) {
  bigPicture.querySelector('.big-picture__img > img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  /*
  if (comments.length < 5) {
    bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  }
*/

  fillBigPictureCommentsTemplate(comments);
  showComments(loadingCommentsStep);

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
}

export {fillBigPictureTemplate, resetBigPicture};
