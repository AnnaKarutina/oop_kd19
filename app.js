// define variables
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

// page reload event
document.addEventListener('DOMContentLoaded', getTasks);
// add task to task list
document.getElementById('task-form').addEventListener('submit', addTask);
// remove task from task list
document.querySelector('.collection').addEventListener('click', removeTask);
// clear task list
document.getElementById('clear-tasks').addEventListener('click', clearTasks);
// filter task for task list
// filter.addEventListener('keyup', filterTasks);

function getTasks(e) {
  ui = new UI();
  ui.showTasks();
  e.preventDefault();
}

function addTask(e) {
  const taskInput = document.getElementById('task').value;
  const task = new Task(taskInput);
  const ui = new UI();
  const ls = new LS();
  if(taskInput == '' ){
    alert('Lisa uus ülesanne!');
  } else {
    ui.addTaskToList(task);
    ui.clearTaskInput();
    ls.addTask(task);
  }
  e.preventDefault();
}

function removeTask(e) {
  const ui = new UI();
  const ls = new LS();
  ui.removeTaskFromList(e.target);
  console.log(e.target.parentElement.parentElement.innerText);
  ls.removeTask(e.target.parentElement.parentElement.innerText);
  e.preventDefault();
}

function clearTasks(e) {
  const ui = new UI();
  ui.clearTasks();
  e.preventDefault();
}