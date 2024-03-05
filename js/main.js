import {getPhotos} from './create-photo-arrays.js';
const MAX_LENGTH_PHOTOS = 25;

Array.from({length:MAX_LENGTH_PHOTOS}, getPhotos());
