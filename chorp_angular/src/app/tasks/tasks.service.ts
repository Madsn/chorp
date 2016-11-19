import {Injectable} from "@angular/core";
import {TaskType} from "./types/task-type";
import {StatusType} from "./types/StatusType";

@Injectable()
export class TasksService {

  constructor() {
  }

  getAll(): TaskType[] {
    return [
      {id: 5, title: "Title", description: "desc", status: StatusType.DOING, assignee: 5, created: new Date(), dueDate: new Date()}
    ];
  }
}
