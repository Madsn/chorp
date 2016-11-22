import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {StatusEnum} from "../tasks/types/status/StatusType";
import {ITaskType} from "../tasks/types/TaskType";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() status: StatusEnum;
  @Input() tasks: ITaskType[];

  constructor() { }

  ngOnInit() {
  }

}
