class UI {
  addTaskToList(task){
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task.task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link); 
    taskList.appendChild(li);
  }

  removeTaskFromList(target) {
    if(confirm('Kas soovid kustutada ülesanne?')) {
      target.parentElement.parentElement.remove();
    }
  }

  clearTaskInput(){
    document.getElementById('task').value = '';
  }

  clearTasks(){
    while(taskList.firstChild) {
      document.querySelector('.collection').removeChild(taskList.firstChild);
    }
  }

  showTasks(){
    const ls = new LS();
    const ui = new UI();
    const tasks = ls.getAllTasks();
    tasks.forEach(function(ylesanne){
      const task = new Task(ylesanne['task']);
      ui.addTaskToList(task);
    })
  }
}