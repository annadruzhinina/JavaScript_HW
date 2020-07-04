"use strict";

/**
* Функция складывает переданные параметры, а именно  параметр "a" складывается с параметром "b".
* @param {number} a
* @param {number} b
* @returns {number}
*/
function addition(a, b) {
	return a + b;
}

alert(addition(4, 1));

/**
* Функция вычитает переданные параметры, а именно из параметра "a" вычитатеся параметр "b".
* @param {number} a
* @param {number} b
* @returns {number}
*/
function subtraction(a, b) {
	return a - b;
}

alert(subtraction(4, 1));
/**
* Функция переумножает переданные параметры, а именно  параметр "a" умножается на параметр "b".
* @param {number} a
* @param {number} b
* @returns {number}
*/
function multiplication(a, b) {
	return a * b;
}

alert(multiplication(4, 1));

/**
* Функция делит переданные значения, а именно  параметр "a" делится на параметр "b".
* @param {number} a
* @param {number} b
* @returns {number}
*/
function division(a, b) {
	return a / b;
}

alert(division(4, 1));

/**
* Функция с тремя параметрами, выполняет математические операции для двух аргументов.
* @param {number} arg1
* @param {number} arg2
* @param {string} operation выполняет операции +, -, *, /
* @throws {Error} если передана непредусмотренная операция, пользователь увидет ошибку
* @returns {number}
*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    	case "+":
    		return addition(arg1, arg2);
    	case "-":
    		return subtraction(arg1, arg2);
    	case "*":
    		return multiplication(arg1, arg2);
    	case "/":
    		return division(arg1, arg2);
    	default:
    		throw new Error("Операция " + operation + " не предусмотрена!")
   	}
}

console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "erunda"));