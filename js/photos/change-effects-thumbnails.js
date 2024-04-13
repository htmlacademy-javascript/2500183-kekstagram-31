const containerSlider = document.querySelector('.effect-level__slider');//контейнер для слайдера
const monitoreEffects = document.querySelector('.effects__list');// делегирования события изменения поля
const imagePreviewChange = document.querySelector('.img-upload__preview img');// редактируемая фотография
const valueEffectLevel = document.querySelector('.effect-level__value');// поля для записи значения слайдера


function hideClassSlider() {
  containerSlider.classList.add('hidden');
  valueEffectLevel.classList.add('hidden');
}

hideClassSlider();// убираем по умолчанию класс слайдера

function showClassSlider() {
  containerSlider.classList.remove('hidden');
  valueEffectLevel.classList.remove('hidden');
}

function resetStyleSettings() {
  imagePreviewChange.style.filter = ''; // обнуляем фильтр стилей!!!
}

noUiSlider.create(containerSlider, {// создать новый слайдер
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',

  format: {
    to: function (value) {// убираем ноль после запитой и делаем трим
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },

});
function updateSettingsMinStep() {// устанавливаем минимальный шаг(0-0.1)
  containerSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step:0.1,
    connect: 'lower',
  });
}

function updateSettingsMaxStep() {// устанавливаем минимальный шаг(1-100) для процентов
  containerSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
    connect: 'lower',
  });
}

function updateSettingsMinStepBlur() {// устанавливаем минимальный шаг(0-0.1)
  containerSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 0,
    step:0.1,
    connect: 'lower',
  });
}

function updateSettingsMinStepBrightness() {// зной
  containerSlider.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 1,
    step:0.1,
    connect: 'lower',
  });
}

function getValueEffectLevel () {
  valueEffectLevel.value = Number(containerSlider.noUiSlider.get());// Задать вопорс Наставнику - не видно поле в разметке!!!
}
function resetEffects() {
  resetStyleSettings();
  hideClassSlider();
}

monitoreEffects.addEventListener('change', (evt) => { // отслеживаем выбранный input
  showClassSlider();
  if (String(evt.target.value) === 'chrome') { // устанавливаем изображению эффект хром
    resetStyleSettings();
    updateSettingsMinStep();
    containerSlider.noUiSlider.on('update', () => {
      imagePreviewChange.style.filter = `grayscale(${containerSlider.noUiSlider.get()})`;
      getValueEffectLevel ();
    });
  }

  if (String(evt.target.value) === 'sepia') {
    resetStyleSettings();
    updateSettingsMinStep();
    containerSlider.noUiSlider.on('update', () => {
      imagePreviewChange.style.filter = `sepia(${containerSlider.noUiSlider.get()})`;
      getValueEffectLevel ();
    });
  }

  if(String(evt.target.value) === 'marvin') {
    resetStyleSettings();
    updateSettingsMaxStep();
    containerSlider.noUiSlider.on('update', () => {
      imagePreviewChange.style.filter = `invert(${containerSlider.noUiSlider.get()}%)`;
    });
  }

  if(String(evt.target.value) === 'phobos') {
    resetStyleSettings();
    updateSettingsMinStepBlur();
    containerSlider.noUiSlider.on('update', () => {
      imagePreviewChange.style.filter = `blur(${containerSlider.noUiSlider.get()}px)`;// не  могу понять почему плохо работает !!!
    });
  }
  if(String(evt.target.value) === 'heat') {
    resetStyleSettings();
    updateSettingsMinStepBrightness();
    containerSlider.noUiSlider.on('update', () => {
      imagePreviewChange.style.filter = `brightness(${containerSlider.noUiSlider.get()})`;
    });
  }

  if(String(evt.target.value) === 'none'){
    resetEffects();
  }
});

export{resetEffects};
