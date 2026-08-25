"use strict";
// Задание 1.
// Дан массив пользователей:
// Добавьте в конец массива двух пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  let sumAges = 0;
  for (let i = 0; i < users.length; i++) {
    sumAges += users[i].age;
  }
  let averageAge = sumAges / users.length;
  return averageAge;
}
console.log(`Средний возраст пользователей ${getUserAverageAge(users)} лет`);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = users => {
  let admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      admins.push(users[i]);
    }
  }
  console.log(admins);
  return admins;
};
getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const num = [1, 8, 9, 4, 5];

const first = (arr, n) => {
  let newArr = [];
  if (n > 0) {
    newArr = arr.slice(0, n);
  } else if (n === 0) {
    newArr = [];
  } else if (n === undefined) {
    n = 0;
    newArr = [arr[n]];
  }
  return newArr;
};
console.log(first(num, 3));
