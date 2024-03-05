import {DESCRIPTIONS,NAMES,SENTENCES} from './data-test.js';

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const MIN_INDEX_DESCRIPTON = 0;
const MIN_LENGTH_COMMENTS = 0;
const MAX_LENGTH_COMMENTS = 30;
const MAX_LENGTH_PHOTOS = 25;

let idCounter = 1;

function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getComments () {
  return function () {
    const createComments = {};
    const randomSentencesIndex = getRandomInteger(0, SENTENCES.length - 1);
    const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
    const randomAvatarNumber = getRandomInteger(MIN_NUMBER_AVATAR,MAX_NUMBER_AVATAR);
    createComments.id = idCounter;
    createComments.avatar = `img/avatar-${randomAvatarNumber}.svg`;
    createComments.message = SENTENCES[randomSentencesIndex];
    createComments.name = NAMES[randomNameIndex];
    idCounter++;
    return createComments;
  };
}

function getPhotos () {
  return function () {
    const createPhoto = {};
    const randomDescriptionIndex = getRandomInteger(MIN_INDEX_DESCRIPTON, DESCRIPTIONS.length - 1);
    const counterLikes = getRandomInteger(MIN_LIKES,MAX_LIKES);
    createPhoto.id = idCounter;
    createPhoto.url = `photos/${idCounter}.jpg`;
    createPhoto.description = DESCRIPTIONS[randomDescriptionIndex];
    createPhoto.likes = counterLikes;
    createPhoto.comments = Array.from({length: getRandomInteger(MIN_LENGTH_COMMENTS,MAX_LENGTH_COMMENTS)}, getComments());
    idCounter++;
    return createPhoto;
  };
}

console.log(Array.from({length:MAX_LENGTH_PHOTOS}, getPhotos()));
