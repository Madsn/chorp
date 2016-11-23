import {Injectable} from "@angular/core";
import {ITaskType} from "./types/TaskType";
import {StatusEnum} from "./types/status/StatusType";
import {RestApiService} from "../services/rest-api.service";

@Injectable()
export class TasksService {

  items: ITaskType[]; // Linked to the array in restapi

  constructor(private api: RestApiService) {
    this.items = this.api.getTasks();
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
    return this.api.addTask(newTask);
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
