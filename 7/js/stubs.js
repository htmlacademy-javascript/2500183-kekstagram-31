import {getRandomInteger} from './util.js';

const DESCRIPTIONS = ['Фография интересная','Фография красивая',
  'Фография черно-белая','Фография цветная','Фография ужасная','Фография печальная','Фография веселая'];

const NAMES = ['Артем','Светлана','Игорь','Мария','Ксения','Петр','Иван','Владимир','Алексей','Ассоль','Лилия','Максим','Константин','Евгения',
  'Михаил','Станислав','Елена','Александр','Марина','Вероника','Бен','Стен',
  'Глен','Ален','Мирослава'];

const SENTENCES = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_INDEX_DESCRIPTON = 0;
const MIN_LENGTH_COMMENTS = 0;
const MAX_LENGTH_COMMENTS = 30;
const MAX_LENGTH_PHOTOS = 25;

const userCounter = 1;

function getComments () {
  let idComments = userCounter;
  return function () {
    const createComments = {};
    const randomSentencesIndex = getRandomInteger(0, SENTENCES.length - 1);
    const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
    const randomAvatarNumber = getRandomInteger(MIN_NUMBER_AVATAR,MAX_NUMBER_AVATAR);
    createComments.id = idComments;
    createComments.avatar = `img/avatar-${randomAvatarNumber}.svg`;
    createComments.message = SENTENCES[randomSentencesIndex];
    createComments.name = NAMES[randomNameIndex];
    idComments++;
    return createComments;
  };
}

function getPhotos () {
  let idPhotos = userCounter;
  let urlPhoto = userCounter;
  return function () {
    const createPhoto = {};
    const randomDescriptionIndex = getRandomInteger(MIN_INDEX_DESCRIPTON, DESCRIPTIONS.length - 1);
    const counterLikes = getRandomInteger(MIN_LIKES,MAX_LIKES);
    createPhoto.id = idPhotos;
    createPhoto.url = `photos/${urlPhoto}.jpg`;
    createPhoto.description = DESCRIPTIONS[randomDescriptionIndex];
    createPhoto.likes = counterLikes;
    createPhoto.comments = Array.from({length: getRandomInteger(MIN_LENGTH_COMMENTS,MAX_LENGTH_COMMENTS)}, getComments());
    idPhotos++;
    urlPhoto++;
    return createPhoto;
  };
}

const photoData = Array.from({length:MAX_LENGTH_PHOTOS}, getPhotos());

export {photoData};
