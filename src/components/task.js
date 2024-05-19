const taskTemplate = document.querySelector('#task').content;
const taskContainer = document.querySelector('.tasks');


function createTask(teamplate, task) {
  const cardTask = teamplate.querySelector('.tasks__one').cloneNode(true);
  cardTask.setAttribute('id', task);
  cardTask.querySelector('.tasks__text').textContent = task;
  cardTask.querySelector('.tasks__text').setAttribute('for', task);
  cardTask.querySelector('.tasks__checkbox').id = task;
  cardTask.querySelector('.tasks__category').textContent = 'All';
  return cardTask;
}


function addTask(teamplate, task, taskContainer) {
  const cardTask = createTask(teamplate, task)
  const buttonDeledetTask = cardTask.querySelector('.task__delete');

  taskContainer.append(cardTask);


  buttonDeledetTask.addEventListener('click', () => {
    const deleteTask = document.querySelector(`#${task}`);
    deleteTask.classList.add("tasks__one_delete");
    setTimeout(() => deleteTask.remove(), 500)
    // Сейчас возникает ошибка при которой если сразу все удалять, остается последний эл. 
  })
}

export {addTask}