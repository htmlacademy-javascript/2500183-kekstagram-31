const formValidate = document.querySelector('.img-upload__form');
const hashtagsForm = formValidate.querySelector('.text__hashtags');
const commentForm = formValidate.querySelector('.text__description');

const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_LENGTH = 5;

const pristine = new Pristine (formValidate,{
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass:  'img-upload__field-wrapper--error'
});

function checkLengthComment(value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

function getDatasetHashTag() {
  return hashtagsForm.dataset.error;
}

function checkHashTagValue(value) {
  const hashTagsArray = value.toLowerCase().trim().split(/\s+/);
  const uniqueHashTagArray = new Set(hashTagsArray);

  if(!value){
    hashtagsForm.dataset.error = '';
    return;
  }

  if(hashTagsArray.length !== uniqueHashTagArray.size){
    hashtagsForm.dataset.error = 'Хэш-теги не должны повторяться';
    return;
  }
  if(hashTagsArray.length > MAX_HASHTAGS_LENGTH){
    hashtagsForm.dataset.error = `Хэш-тегов не должно быть больше чем ${MAX_HASHTAGS_LENGTH}`;
    return;
  }

  hashTagsArray.forEach((item) => {
    if(item[0] !== '#') {
      hashtagsForm.dataset.error = 'хэштег начинается с символа # (решётка)';
    } else if(item === '#') {
      hashtagsForm.dataset.error = 'хэштег не должен состоять из одной # (решётки)';
    }else if(item.slice(1).includes('#')) {
      hashtagsForm.dataset.error = 'хэштеги разделяются пробелами!!!';
    }else if(!/^#[A-Za-zА-Яа-я0-9]{1,19}$/.test(item)){
      hashtagsForm.dataset.error = `строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.) и не должна быть больше чем ${MAX_HASHTAG_LENGTH}символов, включая решётку`;
    }else {
      hashtagsForm.dataset.error = '';
    }
  });
}

pristine.addValidator (hashtagsForm,checkHashTagValue,getDatasetHashTag);
pristine.addValidator (commentForm,checkLengthComment,'длина комментария не может составлять больше 140 символов');

formValidate.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

