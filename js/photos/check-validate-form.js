const formValidate = document.querySelector('.img-upload__form');
const hashtagsForm = formValidate.querySelector('.text__hashtags');
const commentForm = formValidate.querySelector('.text__description');

const pristine = new Pristine (formValidate,{
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass:  'img-upload__field-wrapper--error'
});

function checkLengthComment(value) {
  return value.length <= 140;
}


function checkHashTag(value) {
  if (!hashtagsForm.value) {
    return;
  }
  const hashTag = /^#[A-Za-zА-Яа-я0-9]{1,19}$/.test(value);
  return hashTag;
}

pristine.addValidator (commentForm,checkLengthComment,'длина комментария не может составлять больше 140 символов');

pristine.addValidator (hashtagsForm,checkHashTag,'хэштег с решетки');

formValidate.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

