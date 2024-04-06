import {renderPhotos} from './photos/thumbnails.js';
import './photos/big-thumbnails.js';
import {getData} from './photos/api.js';
import {showErrorMessage} from './photos/error.js';

async function bootstrap() {
  try {
    const newPhotos = await getData();
    renderPhotos(newPhotos);
  } catch {
    showErrorMessage();
  }
}

bootstrap();

