// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Anastasia",
  surname: "Kononova",
  age: 23,
  hobby: "writing",
  depressed: false,
};
for (const personKey in person) {
  console.log(`${personKey}:`, person[personKey]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const notEmptyObj = {
  something: "nothing",
  somebody: "nobody",
  somwhere: true,
};
const emptyObj = {};

const isEmpty = object => {
  for (const key in object) {
    return false;
  }
  return true;
};
isEmpty();
console.log(isEmpty(notEmptyObj)); // false
console.log(isEmpty(emptyObj)); // true

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Homework",
  description: "Do all the assignments",
  isCompleted: false,
};
function cloneAndModify(object, modifications) {
  let newObj = { ...object, ...modifications };
  for (const objKey in newObj) {
    console.log(`${objKey}:`, newObj[objKey]);
  }
  return newObj;
}
const changes = { isCompleted: true, isTired: false };
cloneAndModify(task, changes);

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = object => {
  for (const methKey in object) {
    if (typeof object[methKey] === "function") {
      object[methKey]();
    }
  }
  return methKey;
};
callAllMethods(myObject);
