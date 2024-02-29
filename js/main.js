
function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

let idCounter = 1;

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

function getComments () {
  return function () {
    const createComments = {};
    const randomIdComments = getRandomInteger(1,300);
    const randomSentencesIndex = getRandomInteger(0, SENTENCES.length - 1);
    const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
    const randomAvatarNumber = getRandomInteger(1,6);
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
    const randomDescriptionIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
    const counterLikes = getRandomInteger(15,200);
    createPhoto.id = idCounter;
    createPhoto.url = `photos/${idCounter}'.jpg`;
    createPhoto.description = DESCRIPTIONS[randomDescriptionIndex];
    createPhoto.likes = counterLikes;
    createPhoto.comments = Array.from({length: 1}, getComments());
    idCounter++;
    return createPhoto;

  };

}

Array.from({length:25}, getPhotos());

//console.log(Array.from({length:25}, getPhotos()));
/*function getCounter () {
	let counter = 1 ;
	return function () {
		counter++;
	}
}
*/


