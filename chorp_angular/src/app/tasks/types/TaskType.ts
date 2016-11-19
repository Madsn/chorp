import {StatusType} from "./status/StatusType";
export interface ITaskType {
  id: Number;
  title: String;
  description?: String;
  status: StatusType;
  assignee?: Number;
  created: Date;
  dueDate?: Date;
}
export class TaskType implements ITaskType {
  id: Number;
  title: String;
  description: String;
  status: StatusType;
  assignee: Number;
  created: Date;
  dueDate: Date;
}
