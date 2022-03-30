const taskList = document.getElementById('taskList'); //tododiv
const input = document.getElementById('input'); //taskname

function clickHere() {
  const taskDiv = document.createElement('div');
  const taskName = document.createElement('li');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('dlt');

  taskName.innerHTML = input.value;
  taskDiv.appendChild(taskName);
  taskDiv.appendChild(deleteBtn);
  taskList.appendChild(taskDiv);
}

taskList.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('dlt')) {
    element.parentElement.remove();
  }
});
