import {Component, OnInit} from '@angular/core';
import {TasksService} from "./tasks.service";
import {TaskType, ITaskType} from "./types/TaskType";
import {StatusEnum} from "./types/status/StatusType";
import {DragulaService} from "ng2-dragula/components/dragula.provider";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {

  statusEnum = StatusEnum;
  todoTasks: Array<ITaskType>;
  doingTasks: Array<ITaskType>;
  doneTasks: Array<ITaskType>;
  newTask: TaskType = new TaskType();

  constructor(private tasksService: TasksService, private dragulaService: DragulaService) {
    dragulaService.drop.subscribe(value => {
      console.log(value);
      this.onDrop(value);
    });
  }

  private onDrop(args) {
    const newStatus: StatusEnum = args[2].attributes["status"].value;
    const itemId: number = args[1].attributes["id"].value;
    console.log(newStatus);
    console.log(itemId);
    this.tasksService.updateStatus(itemId, newStatus);
  }

  ngOnInit() {
    this.todoTasks = this.getTasks(StatusEnum.TODO);
    this.doingTasks = this.getTasks(StatusEnum.DOING);
    this.doneTasks = this.getTasks(StatusEnum.DONE);
  }

  getTasks(status?: StatusEnum) {
    return this.tasksService.getAll(status);
  }

  resetNewTaskTitle() {
    this.newTask.title = null;
  }

  saveNewTask(): ITaskType {
    if (this.newTask.title) {
      this.newTask.status = StatusEnum.TODO;
      this.newTask.assignee = 1;
      const savedTask = this.tasksService.add(this.newTask);
      this.todoTasks.push(savedTask);
      this.newTask = new TaskType();
      return savedTask;
    }
  }
}
