import { ListTasks } from "../models/ListTasks.js";
import { Task } from "../models/Task.js";

let listTasks = new ListTasks();

document.querySelector("#addItem").onclick = function () {
  let newTask = new Task();
  let input = document.querySelector("#newTask").value;

  newTask = input;

  listTasks.addTask(newTask);
  listTasks.luuCongViec();
  listTasks.renderTableTask("#todo");

  console.log(newTask);
};

window.xoaCongViec = (taskClick) => {
  console.log(taskClick);
  listTasks.delTask(taskClick);
  listTasks.renderTableTask("#todo");
  listTasks.luuCongViec();
};

window.checkCongViec = (taskClick) => {
    // listTasks.delTask(taskClick);
    listTasks.CompletedTask(taskClick, '#completed');
    listTasks.renderCompletedTask('#completed');
    listTasks.delTask(taskClick);
    listTasks.renderTableTask("#todo");
    listTasks.luuCongViec();
  };


window.onload = function () {
  listTasks.layCongViec();
  listTasks.renderTableTask("#todo");

};
