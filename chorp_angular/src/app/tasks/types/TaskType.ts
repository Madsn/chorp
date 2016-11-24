import {StatusEnum} from "./status/StatusType";
export interface ITaskType {
  id?: number;
  title?: string;
  description?: string;
  status?: StatusEnum;
  assignee?: number;
  created?: Date;
  dueDate?: Date;
}
export class TaskType implements ITaskType {
  id: number;
  title: string;
  description: string;
  status: StatusEnum;
  assignee: number;
  created: Date;
  dueDate: Date;

  constructor(obj: ITaskType) {
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.status = obj.status;
    this.assignee = obj.assignee;
    this.dueDate = obj.dueDate;
    this.created = obj.created || new Date();
  }
}
