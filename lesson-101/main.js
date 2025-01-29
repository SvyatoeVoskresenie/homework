// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.
// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел.Функция должна перебирать полученный массив и если число
// больше 10 - выводить это число в консоль.
// 3) Предлагаю вам реализовать простенький калькулятор.Создайте функцию, которая будет принимать три аргумента, 
// два числа и строку для выбора оператора.При вызове функции пользователь передает, например, (2, 3, ‘minus’), 
// внутри функции происходит проверка на знак и в данном случае функция должна вернуть - 1. 
// То есть мы получаем разницу между первым и вторым аргументом.
// Запишите результат выполнения функции в переменную и выведите в консоль.
// Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

// === 1 часть ===

function firstFunction(name) {
    return `Hello, ${name}`
}

console.log(firstFunction('Alex'))

console.log('|||')

// === 2 часть ===

const sumNumbers = [1, 2, 27, 3, 33, 5, 666]

function sumNumbersResult(array, nume){
    for(let i = array.length > 10; i < array.length; i++){
        if(array[i] === nume){
            return `${nume} is bigger than 10`
        }
    }
    return `There is no such number in the array`
}
console.log(sumNumbersResult(sumNumbers, 666))
console.log(sumNumbersResult(sumNumbers, 999))


console.log('||||')

// === 3 часть ===

function calculator(firstNumber, secondNumber, string) {
    if(string === '-') 
        return firstNumber - secondNumber
    if(string === '+')
        return firstNumber + secondNumber
    if(string === '*')
        return firstNumber * secondNumber
    if(string === '/')
        return firstNumber / secondNumber
        return `None`
    }
console.log(calculator(2, -19999, '/'))



