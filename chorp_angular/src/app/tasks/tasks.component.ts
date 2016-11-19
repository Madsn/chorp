import {Component, OnInit} from '@angular/core';
import {TasksService} from "./tasks.service";
import {TaskType, ITaskType} from "./types/TaskType";
import {StatusType} from "./types/status/StatusType";

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

  resetNewTaskTitle() {
    this.newTask.title = null;
  }

  saveNewTask(): TaskType {
    this.newTask.created = new Date();
    this.newTask.status = StatusType.TODO;
    this.newTask.assignee = 1;
    const savedTask = this.newTask;
    this.tasks = this.tasksService.add(savedTask);
    this.newTask = new TaskType();
    return savedTask;
  }
}
