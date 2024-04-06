const BASEURL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные.Попробуйте еще раз.',
  [Method.POST]: 'Не удалось отправить данные формы.',
};

async function load(route,method = Method.Get, body = null){
  const response = await fetch(`${BASEURL}${route}`,{ method, body });
  return response.ok ? await response.json() : Promise.reject(ErrorText[method]);
}

async function getData() {
  return await load(Route.GET_DATA);
}

export {getData};
