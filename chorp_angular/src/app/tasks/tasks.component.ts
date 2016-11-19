import {Component, OnInit} from '@angular/core';
import {TasksService} from "./tasks.service";
import {TaskType, ITaskType} from "./types/TaskType";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {

  tasks: Array<ITaskType>;
  newTask: TaskType = new TaskType();

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.tasksService.getAll();
  }

  resetTitle() {
    this.newTask.title = null;
  }
}
