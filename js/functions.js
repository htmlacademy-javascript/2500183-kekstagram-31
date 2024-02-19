// Функция для проверки длины строки.
//Не беспокоился о типах данных аргументов и о том, как должна вести себя функция, если ей были переданы неверные аргументы.
function checkStringlength(string, maxlength) {
  return string.length <= maxlength;
}
//Функция для проверки, является ли строка палиндромом, вариант как по заданию!

function checkStringPolidrom(string) {

  let strNormalize = string.replaceAll(' ', '').toUpperCase();
  let strReverse = '';

  for (let i = strNormalize.length-1; i >=0; i--) {
    strReverse+=strNormalize[i];
  }

  return strNormalize === strReverse;

}
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

