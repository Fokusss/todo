import '../pages/style.css';
import { addTask } from './task.js';
import { clearInput } from './utils.js';


const inputTask = document.querySelector('.todo__input');
const taskTemplate = document.querySelector('#task').content;
const taskContainer = document.querySelector('.tasks');


inputTask.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    addTask(taskTemplate, inputTask.value, taskContainer);
    clearInput(inputTask);
  }
})

