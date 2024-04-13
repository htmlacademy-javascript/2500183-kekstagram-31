const TIME_ERROR_REMOVE = 5000;

const errorDataFetch = document.querySelector('#data-error').content;
const body = document.body;


function showErrorMessage() {
  const errorArea = errorDataFetch.cloneNode(true);
  body.append(errorArea);

  const errorDataLoader = body.querySelector('.data-error');

  setTimeout(() => {
    errorDataLoader.remove();
  },TIME_ERROR_REMOVE);
}

export {showErrorMessage};
