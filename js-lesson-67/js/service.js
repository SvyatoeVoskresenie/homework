import { todoKeys, errTodoNotFound } from "./constants.js";

export const getNewTodosId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

export const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodosId(todos),
    [todoKeys.text]: text.trim(),
    [todoKeys.isCompleted]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

export const changeTodoStatus = (todos, todoId) => {
  let todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.isCompleted] = !todo[todoKeys.isCompleted];
  return todo;
};

export const changeTodoText = (todos, todoId, text) => {
  let todo = todos.find(todo => todo[todoKeys.id] === todoId);
  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.text] = text;
  return todo;
};

export const deleteTodo = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};
