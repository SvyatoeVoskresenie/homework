"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  isCompleted: "is_completed",
};
const todos = [];
const errTodoNotFound = id => `Todo with id ${id} not found`;

const getNewTodosId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodosId(todos),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };
  todos.push(newTodo);
  return todos;
};

const changeTodoStatus = (todos, id) => {
  let todo = todos.find(todo => todo[todoKeys.id] === id);
  if (!todo) {
    console.error(errTodoNotFound(id));
    return null;
  }
  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  return todo;
};

const changeTodoText = (todos, id, text) => {
  let todo = todos.find(todo => todo[todoKeys.id] === id);
  if (!todo) {
    console.error(errTodoNotFound(id));
    return null;
  }
  todo[todoKeys.text] = text;
  return todo;
};

const deleteTodo = (todos, id) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === id);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(id));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const todosEl = document.querySelector(".todos");

let numCounter = 2;
const count = () => numCounter++

const createTodoElement = () => {
  const todoEl = document.createElement("li");
  todoEl.classList.add("todo");
  todoEl.innerHTML = `
          <div class="todo-text">Задача ${count()}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>
    `;
  todosEl.append(todoEl);
};

const handleCreateTodo = (todos, text) => {
  createTodo(todos, text)
  createTodoElement()
}