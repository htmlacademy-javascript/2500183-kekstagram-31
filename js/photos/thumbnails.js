const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function createPhotoTemplate(photoData) {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = photoData.url;
  image.alt = photoData.description;
  image.dataset.id = photoData.id;
  thumbnail.querySelector('.picture__likes').textContent = photoData.likes;
  thumbnail.querySelector('.picture__comments').textContent = photoData.comments.length;
  return thumbnail;
}

function renderPhotos(photosData) {
  photosData.forEach((item) => {
    const photoTempalte = createPhotoTemplate(item);
    fragment.appendChild(photoTempalte);
  });
  container.appendChild(fragment);
}

export {renderPhotos};
