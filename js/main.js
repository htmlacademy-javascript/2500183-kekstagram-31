const DESCRIPTIONS = [
  'Фография интересная',
  'Фография красивая',
  'Фография черно-белая',
  'Фография цветная',
  'Фография ужасная',
  'Фография печальная',
  'Фография веселая'
];

const NAMES = [
  'Артем',
  'Светлана',
  'Игорь',
  'Мария',
  'Ксения',
  'Петр',
  'Иван',
  'Владимир',
  'Алексей',
  'Ассоль',
  'Лилия',
  'Максим',
  'Константин',
  'Евгения',
  'Михаил',
  'Станислав',
  'Елена',
  'Александр',
  'Марина',
  'Вероника',
  'Бен',
  'Стен',
  'Глен',
  'Ален',
  'Мирослава'
];

const SENTENCES = [
  'Всё отлично! В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const MINLIKES = 15;
const MAXLIKES = 200;
const MINCOMMENTS = 0;
const MAXCOMMENTS = 30;
const MINNUMBERAVATAR = 1;
const MAXNUMBERAVATAR = 6;
const MININDEXDESCRIPTON = 0;
const MINLENGTHCOMMENTS = 1;
const MAXLENGTHPHOTOS = 25;

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
    const randomIdComments = getRandomInteger(MINCOMMENTS,MAXCOMMENTS);
    const randomSentencesIndex = getRandomInteger(0, SENTENCES.length - 1);
    const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
    const randomAvatarNumber = getRandomInteger(MINNUMBERAVATAR,MAXNUMBERAVATAR);
    createComments.id = randomIdComments;
    createComments.avatar = `img/avatar-${randomAvatarNumber}.svg`;
    createComments.message = SENTENCES[randomSentencesIndex];
    createComments.name = NAMES[randomNameIndex];
    return createComments;

  };
}

function getPhotos () {

  return function () {
    const createPhoto = {};
    const randomDescriptionIndex = getRandomInteger(MININDEXDESCRIPTON, DESCRIPTIONS.length - 1);
    const counterLikes = getRandomInteger(MINLIKES,MAXLIKES);
    createPhoto.id = idCounter;
    createPhoto.url = `photos/${idCounter}'.jpg`;
    createPhoto.description = DESCRIPTIONS[randomDescriptionIndex];
    createPhoto.likes = counterLikes;
    createPhoto.comments = Array.from({length: MINLENGTHCOMMENTS}, getComments());
    idCounter++;
    return createPhoto;

  };

}

Array.from({length:MAXLENGTHPHOTOS}, getPhotos());

//console.log(Array.from({length:MAXLENGTHPHOTOS}, getPhotos()));
/*function getCounter () {
	let counter = 1 ;
	return function () {
		counter++;
	}
}
*/


