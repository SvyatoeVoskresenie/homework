import { todoKeys } from "./constants.js";
import { changeTodoStatus, createTodo, deleteTodo } from "./service.js"
import { setTodosToLocalStorage } from "./storage.js";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const todosEl = document.querySelector(".todos");

const createTodoElement = todo => {
  const todoEl = document.createElement("li");
  todoEl.classList.add("todo");
  todoEl.dataset.id = todo[todoKeys.id];
  todoEl.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
      <button class="button-complete button">&#10004;</button>
      <button class="button-delete button">&#10006;</button>
    </div>
    `;
  return todoEl;
};

export const renderTodos = (todos) => {
  todosEl.innerHTML = "";
  todos.forEach(todo => {
    const todoEl = createTodoElement(todo);
    if (todo[todoKeys.isCompleted]) todoEl.classList.add("completed");
    todosEl.append(todoEl);
  });
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoEl = createTodoElement(todo);
  setTodosToLocalStorage(todos);
  todosEl.append(todoEl);
};

export const initTodoHandlers = todos => {
  formEl.addEventListener("submit", event => {
    event.preventDefault();

    const text = inputEl.value.trim();
    if (!text) return;

    handleCreateTodo(todos, text);
    inputEl.value = "";
  });

  todosEl.addEventListener("click", ({ target }) => {
    const todo = target.closest(".todo");
    if (!todo) return;
    const todoId = Number(todo.dataset.id);
    if (target.matches(".button-complete")) {
      changeTodoStatus(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }
    if (target.matches(".button-delete")) {
      deleteTodo(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
// самостоятельные потуги
// todosEl.addEventListener("click", event => {
//   const todoEl = event.target.closest(".todo");
//   if (
//     event.target.classList.contains("button-complete") ===
//     !todos[todoKeys.isCompleted]
//   ) {
//     changeTodoStatus(todos, Number(todoEl.id));
//     todoEl.closest(".todo").classList.toggle("completed");
//   } else if (event.target.classList.contains("button-delete")) {
//     deleteTodo(todos, Number(todoEl.id));
//     todoEl.remove(createTodoElement(todos, todoEl));
//   }
// });
