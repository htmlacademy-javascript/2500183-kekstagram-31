import {getRandomInteger} from './util.js';
import {DESCRIPTIONS,NAMES,SENTENCES} from './data.js';
import {getComments} from './create-comments-array.js';

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_INDEX_DESCRIPTON = 0;
const MIN_LENGTH_COMMENTS = 0;
const MAX_LENGTH_COMMENTS = 30;

let idCounter = 1;

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
export {getPhotos};