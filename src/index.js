import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// import { saludar } from './js/componentes.js';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(newTodo);

// todoList.todos[0].imprimirClase();

// newTodo.imprimirClase();

console.log('todos', todoList.todos);

// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','ABC456');
// sessionStorage.setItem('mi-key','ABC456');

// setTimeout( () => {

//     localStorage.removeItem('mi-key');

// }, 1500);