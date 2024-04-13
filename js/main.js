import {renderPhotos} from './photos/thumbnails.js';
import './photos/big-thumbnails.js';
import {getData} from './photos/api.js';
import {showErrorMessage} from './photos/error.js';
import'./photos/upload-image.js';

import {initializeBigPhoto} from './photos/big-thumbnails.js';

async function bootstrap() {
  try {
    const newPhotos = await getData();
    renderPhotos(newPhotos);
    initializeBigPhoto(newPhotos);
  } catch {
    showErrorMessage();
  }
}

bootstrap();

