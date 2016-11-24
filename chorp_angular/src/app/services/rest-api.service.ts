import {Injectable} from '@angular/core';
import {ITaskType} from "../tasks/types/TaskType";

@Injectable()
export class RestApiService {

  tasks: ITaskType[] = [];
  taskId: number = 0;

  constructor() {
  }

  getTasks(): ITaskType[] {
    return this.tasks;
  }

  addTask(task: ITaskType): ITaskType {
    task.id = this.taskId++;
    this.tasks.push(task);
    return task;
  }
}
