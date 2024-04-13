const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const photoChooser = document.querySelector('#upload-file');
const photoPreview = document.querySelector('.img-upload__preview img');

function onPhotoChooserChange () {
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    photoPreview.src = URL.createObjectURL(file);
  }
}

photoChooser.addEventListener('change', onPhotoChooserChange);
