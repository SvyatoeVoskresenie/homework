// Задача 1.
// Напишите условие, которое будет проверять чётное ли число, используйте оператор if.

// let number = +prompt("Введите число", 0);
// if (number % 2 === 0) {
//     alert('Число чётное')
// } else if (isNaN(number)) {
//     alert('Введите число заново')
// }
// else{
//     alert('Число нечётное')
// }

// Задача 2.
// 1. Объявите переменную age с числовым значением.
// 2. С помощью тернарного оператора (вложенного, если нужно) присвойте переменной discount значение скидки:
//    2.1. Если age меньше 18 – скидка 10%.
//    2.2. Если age от 18 до 65 (включительно) – скидка 20%.
//    2.3. Если age больше 65 – скидка 30%.
// 3. Выведите значение discount в консоль.

// let age = +prompt("Введите свой возраст", 0);
// let discountLow = 10;
// let discountMedium = 20;
// let discountLarge = 30;
// const discountTotal = age <= 17 ? discountLow : age >= 111 ? alert('Введите возраст заново для получения скидки') : age >= 66 ? discountLarge : age >= 18 ? discountMedium : isNaN(age) ? alert('Введите возраст заново для получения скидки') : alert('Введите возраст заново для получения скидки');
// console.log(`Ваша скидка ${discountTotal}%`);

// 4. *Дополнительное задание: перепишите задачу на switch-case.

// switch (true) {
//   case (age <= 17):
//     console.log(`Ваша скидка ${discountLow}%`);
//     break;
//   case (age >= 111):
//     alert("Введите возраст заново для получения скидки");
//     break;
//   case (age >= 66):
//     console.log(`Ваша скидка ${discountLarge}%`);
//     break;
//   case (age >= 18):
//     console.log(`Ваша скидка ${discountMedium}%`);
//     break;
//     default:
//       alert("Введите возраст заново для получения скидки");
// }

// Задача 3.
// 1. Объявите переменные username и password.
//    Допустимые варианты имени пользователя — это "admin" или "user", а пароль должен быть равен "123456".
// 2. Если выполняется условие:
//     (username равен "admin" или "user") и пароль равен "123456"
//     то выведите сообщение "Доступ разрешен", иначе — "Доступ запрещен".
// 3. Используйте prompt для ввода имени пользователя и пароля.

// let username = prompt("Введите Ваш статус", "");
// const ADMIN = "admin";
// const USER = "user";
// let password = +prompt("Введите Ваш пароль", 123456);
// const PASSWORD = 123456;
// switch (true) {
//   case (username === ADMIN && password === PASSWORD):
//     console.log("Доступ разрешён");
//     break;
//   case (username === USER && password === PASSWORD) :
//     console.log("Доступ разрешён");
//     break;
//   default:
//     console.log("Доступ запрещён");
// }

// ____

// if ((username === ADMIN && password === PASSWORD) || (username === USER && password === PASSWORD)) {
//   console.log("Доступ разрешён");
// } else {
//   console.log("Доступ запрещён");
// }

// *Задача 4.
// Создайте программу, которая рассчитывает стоимость доставки посылки, основываясь на весе и типе доставки. Программа должна запрашивать у пользователя данные с помощью prompt и выводить результат через alert.

// 1. Ввод данных:
//    1.1. Запросите у пользователя вес посылки (в килограммах).
//    1.2. Запросите у пользователя тип доставки. Допустимые варианты:
//        "Стандарт"
//        "Экспресс"
//        "Премиум"

const PACKAGEWEIGHT = +prompt("Введите вес Вашей посылки (кг)", 0);
const PACKAGETYPE = prompt(
  "Введите тип доставки: Стандарт, Экспресс, Премиум. Пишите с заглавной буквы",
  "Стандарт",
);
let = packageStandart = "Стандарт";
let = packageExpress = "Экспресс";
let = packagePremium = "Премиум";
// 2. Проверка корректности данных:
//    2.1. Если вес меньше или равен 0, выведите сообщение об ошибке: "Некорректный вес посылки".
//    2.2. Если введён тип доставки, который не соответствует ни одному из ожидаемых вариантов, выведите сообщение: "Неверный тип доставки".

// switch (true) {
//   case PACKAGEWEIGHT > 0:
//     console.log("Package weight is okay");
//     break;
//   case PACKAGEWEIGHT <= 0:
//     alert("Некорректный вес посылки");
// }
// switch (true) {
//   case PACKAGETYPE === packageStandart:
//   case PACKAGETYPE === packageExpress:
//   case PACKAGETYPE === packagePremium:
//     console.log("Package type is okay");
//     break;
//   case PACKAGETYPE != packageStandart:
//   case PACKAGETYPE != packageExpress:
//   case PACKAGETYPE != packagePremium:
//     alert("Неверный тип доставки");
// }
if (PACKAGEWEIGHT > 0) {
  console.log("Package weight is okay");
} else if (PACKAGEWEIGHT <= 0) {
  alert("Некорректный вес посылки");
}
if (
  PACKAGETYPE === packageStandart ||
  PACKAGETYPE === packageExpress ||
  PACKAGETYPE === packagePremium
) {
  console.log("Package type is okay");
} else {
  alert("Неверный тип доставки");
}

// 3. Расчёт базовой стоимости доставки:
//    3.1. Определите базовую стоимость в зависимости от веса посылки:
//        Если вес меньше 1 кг, базовая стоимость — 5$.
//        Если вес от 1 кг до 5 кг (включительно), базовая стоимость — 10$.
//        Если вес больше 5 кг, базовая стоимость — 15$.
let priceLow = 5;
let priceMedium = 10;
let priceLarge = 15;
//    Для определения базовой стоимости можно использовать конструкцию if...else или тернарный оператор.
// const discountTotal = age <= 17 ? discountLow : age >= 111 ? alert('Введите возраст заново для получения скидки') : age >= 66 ? discountLarge : age >= 18 ? discountMedium : isNaN(age) ? alert('Введите возраст заново для получения скидки') : alert('Введите возраст заново для получения скидки');
const INTERIMPRICE = isNaN(PACKAGEWEIGHT)
  ? alert("Type a number")
  : PACKAGEWEIGHT <= 0
    ? console.log("Inncorect weight")
    : PACKAGEWEIGHT > 50
      ? alert("The package weight is too big. Choose another weight")
      : PACKAGEWEIGHT < 1
        ? priceLow
        : PACKAGEWEIGHT <= 5
          ? priceMedium
          : PACKAGEWEIGHT > 5
            ? priceLarge
            : console.log("Something went wrong");

console.log(INTERIMPRICE);
// 4. Определение коэффициента по типу доставки:
//     Используйте конструкцию switch-case для назначения коэффициента:
//        "Стандарт": коэффициент 1
//        "Экспресс": коэффициент 1.5
//        "Премиум": коэффициент 2
let coefficient;
switch (true) {
  case PACKAGETYPE === packageStandart:
    coefficient = 1;
    break;
  case PACKAGETYPE === packageExpress:
    coefficient = 1.5;
    break;
  case PACKAGETYPE === packagePremium:
    coefficient = 2;
    break;
}
// switch (true) {
//   case PACKAGETYPE === packageStandart:
//     console.log(1);
//     break;
//   case PACKAGETYPE === packageExpress:
//     console.log(1.5);
//     break;
//   case PACKAGETYPE === packagePremium:
//     console.log(2);
//     break;
// }
// 5. Расчёт итоговой стоимости доставки:
//    Итоговая стоимость = базовая стоимость * коэффициент.

let totalPrice = INTERIMPRICE * coefficient;

// 6. Вывод результата:
//    С помощью alert выведите итоговую стоимость доставr
alert(`Цена доставки составит ${totalPrice}$`)