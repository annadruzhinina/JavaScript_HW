'use strict';

var num = prompt('Введите любое целое число в диапазоне [0 .. 999]: ');

function getDigitsOfNumber(num) {
   if (!Number.isInteger(num) || num < 0 || num > 999) {
      console.log('Передаваемы аргумент должен быть целым числом в диапазоне [0 .. 999]');
      return {};
   }
   return {
      units: num % 10,
      hundreds: Math.floor(num / 100), 
      tens: Math.floor(num /10) % 10
   }
}
console.log(getDigitsOfNumber(345));