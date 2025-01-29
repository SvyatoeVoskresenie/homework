// Создайте объект с вашим описанием(имя, возраст и т.д.).

const meMyselfAndI = {
    name: 'Anastasia',
    age: 21,
    city: 'Nizhny Novgorod'
}

console.log(meMyselfAndI)

console.log(`|||`)

// Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’

const sumData = {
    vadim: {
        name: 'Vadim',
        age: 20,
        city: 'Nizhny Novgorod',

        sayHello(name) {
            console.log(`Hello, ${name}`)
        }
    }
}

sumData.vadim.sayHello(`Vadim`)

// Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет 
// храниться количество простых пользователей, начальное значение будет - 0. 
// Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. 
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

let justUsers = 0
const users = [
        {
            name: 'Vadim',
            age: 20,
            city: 'Nizhny Novgorod',
            isAdmin: false,
        },
        {
            name: 'Anastasia',
            age: 21,
            city: 'Nizhny Novgorod',
            isAdmin: true,
        },
        {
            name: 'Elisaveta',
            age: 20,
            city: 'Nizhny Novgorod',
            isAdmin: false,
        },
]

function whoIsAdmin() {
for (let i = 0; i < users.length; i++){
    if(users[i].isAdmin === false) {
        justUsers++
    }
}
return justUsers
}

console.log(whoIsAdmin())

