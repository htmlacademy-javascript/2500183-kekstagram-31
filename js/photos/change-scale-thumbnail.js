const valueControlScale = document.querySelector('.scale__control--value');//значение , нужно менять scale
const imagePreviewChange = document.querySelector('.img-upload__preview img');// фото которое нужно масштабировать

const MAX_VALUE_SCALE = 100;
const MIN_VALUE_SCALE = 25;
const STEP_VALUE_SCALE = 25;

function getTransformImage() {
  imagePreviewChange.style.transform = `scale(${parseFloat(valueControlScale.value) / 100})`;
}

function shrinkValueScale() {
  const currentValueScale = parseFloat(valueControlScale.value);

  if(currentValueScale === MIN_VALUE_SCALE) {
    return;
  }

  valueControlScale.value = `${currentValueScale - STEP_VALUE_SCALE}%`;
  getTransformImage();
}

function increaseValueScale() {
  const currentValueScale = parseFloat(valueControlScale.value);

  if(currentValueScale === MAX_VALUE_SCALE) {
    return;
  }

  valueControlScale.value = `${currentValueScale + STEP_VALUE_SCALE}%`;
  getTransformImage();
}

export {shrinkValueScale,increaseValueScale};
