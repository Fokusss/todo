const inputTask = document.querySelector('.todo__input');
const taskTemplate = document.querySelector('#task').content;
const taskContainer = document.querySelector('.tasks');

inputTask.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    addTask(inputTask.value);
    inputTask.value = '';
  }
})

function addTask(task) {
  container = taskTemplate.querySelector('.tasks__one').cloneNode(true);
  container.querySelector('.tasks__text').textContent = task;
  container.querySelector('.tasks__text').setAttribute('for', task);
  container.querySelector('.tasks__checkbox').id = task;
  container.querySelector('.tasks__category').textContent = 'All';
  taskContainer.append(container);
} 