const form = document.querySelector('.img-upload__form');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;

const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

function checkCommentLength(value) {
  return value.length <= MAX_COMMENT_LENGTH;
}

function getErrorText() {
  return hashtagsField.dataset.error;
}

function normilizedHastags(value) {
  return value.toLowerCase().trim().split(/\s+/);
}

function hasDublicates(hashTagsArray) {
  const isValid = hashTagsArray.length === new Set(hashTagsArray).size;

  hashtagsField.dataset.error = isValid ? '' : 'Хэш-теги не должны повторяться';

  return isValid;
}

function hasValidCount(hashTagsArray) {
  const isValid = hashTagsArray.length < MAX_HASHTAGS_COUNT;

  hashtagsField.dataset.error = isValid
    ? ''
    : `Хэш-тегов не должно быть больше чем ${MAX_HASHTAGS_COUNT}`;

  return isValid;
}

function hasValidPattern(hashTagsArray) {
  const errText = 'строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.) и не должна быть больше чем 20 символов, включая решётку';
  const isValid = hashTagsArray.every((tag) =>
    /^#[A-Za-zА-Яа-я0-9]{1,19}$/i.test(tag)
  );

  hashtagsField.dataset.error = isValid ? '' : errText;

  return isValid;
}

function isHashtagsFieldValid(value) {
  if (!value) {
    return !value;
  }
  const hashtagsArray = normilizedHastags(value);
  return (
    hasValidPattern(hashtagsArray) &&
    hasDublicates(hashtagsArray) &&
    hasValidCount(hashtagsArray)
  );
}

pristine.addValidator(hashtagsField, isHashtagsFieldValid, getErrorText);

pristine.addValidator(
  commentsField,
  checkCommentLength,
  'длина комментария не может составлять больше 140 символов'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
