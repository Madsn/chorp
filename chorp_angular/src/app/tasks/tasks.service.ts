import {Injectable} from "@angular/core";
import {ITaskType} from "./types/TaskType";
import {StatusType} from "./types/status/StatusType";

@Injectable()
export class TasksService {

  items: ITaskType[];
  constructor() {
    this.items = [
      {id: 5, title: "Title", description: "desc", status: StatusType.DOING, assignee: 5, created: new Date(), dueDate: new Date()},
      {id: 6, title: "Title2", description: "desc2", status: StatusType.DOING, assignee: 5, created: new Date(), dueDate: new Date()}
    ];
  }

  getAll(): ITaskType[] {
    return this.items;
  }

  add(newTask): ITaskType[] {
    this.items.push(newTask);
    return this.items;
  }
}
