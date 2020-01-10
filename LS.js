class LS {
  getAllTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }
  addTask(task){
    const tasks = this.getAllTasks();
    console.log(task);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  removeTask(taskValue){
    const tasks = this.getAllTasks();
    tasks.forEach(function(task, index) {
      if(task.task === taskValue){
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}