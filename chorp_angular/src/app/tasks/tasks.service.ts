import {Injectable} from "@angular/core";
import {ITaskType} from "./types/TaskType";
import {StatusEnum} from "./types/status/StatusType";

@Injectable()
export class TasksService {

  items: ITaskType[] = [];
  id: number = 0;

  constructor() {
  }

  getAll(status?: StatusEnum): ITaskType[] {
    if (status != null) {
      return this.items.filter(
        task => task.status === status);
    } else {
      return this.items;
    }
  }

  add(newTask: ITaskType): ITaskType {
    newTask.id = this.id++;
    this.items.push(newTask);
    return newTask;
  }

  updateStatus(itemId: number, newStatus: StatusEnum) {
    for (var i in this.items) {
      if (this.items[i].id == itemId) {
        this.items[i].status = newStatus;
        return this.items;
      }
    }
  }
}
