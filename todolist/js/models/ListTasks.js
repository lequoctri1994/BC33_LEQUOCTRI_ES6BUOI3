export class ListTasks {
  arrTasks = [];
  arrCompletedTask = [];

  addTask = (newTask) => {
    this.arrTasks.push(newTask);
  };
  

  luuCongViec() {
    localStorage.setItem("arrTasks", JSON.stringify(this.arrTasks));
  }

  layCongViec() {
    if (localStorage.getItem("arrTasks")) {
      this.arrTasks = JSON.parse(localStorage.getItem("arrTasks"));
    }
  }

  delTask(taskClick) {
    this.arrTasks = this.arrTasks.filter(result => result !== taskClick);
  }

  CompletedTask(taskClick, selector) {
    let result = this.arrTasks.map((completed,index) => {
      let completedTask = {completed,index};
      this.arrCompletedTask.push(completedTask);
    })

    console.log(this.completedTask)
  }

  renderCompletedTask = (selector) => {
    let htmlContent = this.arrCompletedTask.reduce((html, completedTask, index) => {
      console.log(this.CompletedTask.taskClick)
      return (
        html +
        `
        <li class="d-flex">
        <div>
        ${completedTask}
        </div>
        <div>
        <button onclick="xoaCongViec('${completedTask}')" class="btn delTask" style="border:none">
        <i class="fa-solid fa-trash"></i>
        </button>
        <button onclick="checkCongViec('${completedTask}')" class="btn" style="border:none" color:"green">
        <i class="fa-solid fa-circle-check"></i>
        </button>
        </div>
        </li>
        `
      );
    }, "");
    document.querySelector(selector).innerHTML = htmlContent;
  }

  renderTableTask = (selector) => {
    let htmlContent = this.arrTasks.reduce((html, task, index) => {
      return (
        html +
        `
        <li class="d-flex">
        <div>
        ${task}
        </div>
        <div>
        <button onclick="xoaCongViec('${task}')" class="btn delTask" style="border:none">
        <i class="fa-solid fa-trash"></i>
        </button>
        <button onclick="checkCongViec('${task}')" class="btn" style="border:none">
        <i class="fa-solid fa-circle-check"></i>
        </button>
        </div>
        </li>
        `
      );
    }, "");
    document.querySelector(selector).innerHTML = htmlContent;
  };

}
