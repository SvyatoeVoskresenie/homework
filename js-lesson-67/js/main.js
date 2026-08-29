"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  isCompleted: "is_completed"
};
const todos = [];
const errTodoNotFound = id => `Todo with id ${id} not found`;

const getNewTodosId = array =>
  array.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (array, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodosId(todos),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };
  array.push(newTodo);
  return array;
};

const changeTodo = (array, id, text) => {
  let todo = array.find(todo => todo[todoKeys.id] === id);
  if (!todo) {
    console.error(errTodoNotFound(id));
    return null;
  }
  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  todo[todoKeys.text] = text
  return todo;
};

const deleteTodo = (array, id) => {
  const todoIndex = array.findIndex(todo => todo[todoKeys.id] === id);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(id));
    return array;
  }
  array.splice(todoIndex, 1);
  return array;
};
