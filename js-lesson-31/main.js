// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

const calculateFinalPrice = (basicPrice, discount, tax) => {
  let priceAfterDiscount = basicPrice - basicPrice * (discount / 100);
  let finalPrice = priceAfterDiscount * tax + priceAfterDiscount;
  return finalPrice;
};
console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0)); // 90

// Пример работы:

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userNameame, userPassword) {
    userName = prompt("Введите имя пользователя");
    userPassword = +prompt("Введите пароль");
    if (userName === "admin" && userPassword === 123456) {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
}
console.log(checkAccess());

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const getTimeOfDay = (time, period) => {
  time = +prompt("Введите время, у которого Вы хотите узнать часть дня");
  period = "";
  if (time <= 5) {
    period = "Ночь";
  } else if (time <= 11) {
    period = "Утро";
  } else if (time <= 17) {
    period = "День";
  } else if (time <= 23) {
    period = "Вечер";
  } else {
    period = "Некорректное время";
  }
  return period;
};
alert(getTimeOfDay());

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".
function findFirstEven(start, end) {
while (i = start, i <= end, i++) {
    firstEven = i % 2 === 0 ? console.log(i) : 'Нет чётных чисел'
    break
}
    return firstEven;
}
console.log(findFirstEven(7, 10));

function findEven(start, end) {
  let even = 0;
  for (i = start; i <= end; i++) {
    even = i % 2 === 0 ? console.log(i) : 'Нет чётных чисел'; 
  }
  return even;
}
console.log(findEven(7, 16));
// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
