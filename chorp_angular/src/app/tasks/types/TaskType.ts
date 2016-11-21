import {StatusEnum} from "./status/StatusType";
export interface ITaskType {
  id?: number;
  title: string;
  description?: string;
  status: StatusEnum;
  assignee?: number;
  created: Date;
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

  constructor(id?: number, title?: string, description?: string, status?: StatusEnum) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.created = new Date();
  }
}
