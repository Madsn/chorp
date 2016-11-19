import {Injectable} from "@angular/core";
import {TaskType} from "./types/TaskType";
import {StatusType} from "./types/status/StatusType";

@Injectable()
export class TasksService {

  constructor() {
  }

  getAll(): TaskType[] {
    return [
      {id: 5, title: "Title", description: "desc", status: StatusType.DOING, assignee: 5, created: new Date(), dueDate: new Date()},
      {id: 6, title: "Title2", description: "desc2", status: StatusType.DOING, assignee: 5, created: new Date(), dueDate: new Date()}
    ];
  }
}
