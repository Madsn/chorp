import {Injectable} from "@angular/core";
import {ITaskType, TaskType} from "./types/TaskType";
import {StatusEnum} from "./types/status/StatusType";

@Injectable()
export class TasksService {

  items: ITaskType[] = [];
  taskId: number = 0;

  constructor() {
  }

  getAll(status?: StatusEnum): ITaskType[] {
    if (status !== undefined) {
      return this.items.filter(
        task => {
          console.log(task.status);
          console.log(status);
          console.log(task.status === status);
          return task.status === status
        });
    } else {
      return this.items;
    }
  }

  add(task: TaskType) {
    this.items.push(task);
    return task;
  }

  updateStatus(itemId: number, newStatus: StatusEnum) {
    for (var i in this.items) {
      if (this.items[i].id == itemId) {
        this.items[i].status = newStatus;
        return this.items;
      }
    }
  }

  getNewTask() {
    return new TaskType({id: this.taskId++});
  }
}
