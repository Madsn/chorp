import {StatusType} from "./StatusType";
export interface TaskType {
  id: Number;
  title: String;
  description: String;
  status: StatusType;
  assignee: Number;
  created: Date;
  dueDate: Date;
}
