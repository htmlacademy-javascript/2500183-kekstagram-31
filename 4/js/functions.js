// Функция для проверки длины строки.
//Не беспокоился о типах данных аргументов и о том, как должна вести себя функция, если ей были переданы неверные аргументы.
function getMyStr (str, mynumber) {

  return str.length <= mynumber;
}

getMyStr ('длиннаястрока', 10);
getMyStr ('длиннаястрока', 30);

//Функция для проверки, является ли строка палиндромом, вариант как по заданию!

function getStrgPol (string) {

  let strNorm = string.replaceAll(' ', '');
  strNorm = strNorm.toUpperCase();
  let strReverse = '';

  for (let i = strNorm.length - 1; i >= 0; i--) {
    strReverse += strNorm[i];
  }

  return strNorm === strReverse;

}
getStrgPol ('дед');
getStrgPol ('Шалаш');
getStrgPol ('Шалаш Шалаш Шалаш');
getStrgPol ('Интересное задание спасибо за проверку');


//Функция для проверки, является ли строка палиндромом - мой вариант!
/*
function checkStringPolidrom  (str) {

  let string = str.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < string.length; i++) {
      if(string[i] === string[(string.length-1) - i]){
          return true;
      }
      return false;
  }
}
*/

