import {Component, OnInit} from '@angular/core';
import {TasksService} from "./tasks.service";
import {TaskType, ITaskType} from "./types/TaskType";
import {StatusEnum} from "./types/status/StatusType";
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {RestApiService} from "../services/rest-api.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService, RestApiService]
})
export class TasksComponent implements OnInit {

  statusEnum = StatusEnum;
  tasks: Array<ITaskType>; // Linked to the array in taskservice
  newTask: TaskType = new TaskType();

  constructor(private tasksService: TasksService, private dragulaService: DragulaService) {
    dragulaService.drop.subscribe(value => {
      console.log(value);
      this.onDrop(value);
    });
  }

  private onDrop(args) {
    const newStatus: StatusEnum = args[2].attributes["status"].value;
    const itemId: number = args[1].attributes["taskId"].value;
    this.tasks = this.tasksService.updateStatus(itemId, newStatus);
  }

  ngOnInit() {
    this.tasks = this.tasksService.getAll();
  }

  resetNewTaskTitle() {
    this.newTask.title = null;
  }

  saveNewTask(): ITaskType {
    if (this.newTask.title) {
      console.log('saveNewTask');
      this.newTask.status = StatusEnum.TODO;
      this.newTask.assignee = 1;
      const savedTask = this.tasksService.add(this.newTask);
      this.newTask = new TaskType();
      return savedTask;
    }
  }
}
