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
  container.setAttribute('id', task);
  container.querySelector('.tasks__text').textContent = task;
  container.querySelector('.tasks__text').setAttribute('for', task);
  container.querySelector('.tasks__checkbox').id = task;
  container.querySelector('.tasks__category').textContent = 'All';
  taskContainer.append(container);

  const buttonDeledetTask = container.querySelector('.task__delete');
  buttonDeledetTask.addEventListener('click', () => {
    deleteTask = document.querySelector(`#${task}`);
    deleteTask.classList.add("tasks__one_delete");
    setTimeout(() => deleteTask.remove(), 500)
    // Сейчас возникает ошибка при которой если сразу все удалять, остается последний эл. 
  })
} 