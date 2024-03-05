import {DESCRIPTIONS,NAMES,SENTENCES} from './data-test.js';
import {getRandomInteger} from './util.js';

const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;

let idCounter = 1;

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
export {getComments};
