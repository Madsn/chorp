/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {FilterByStatusPipe} from './filter-by-status.pipe';
import {StatusEnum} from "./StatusType";
import {ITaskType, TaskType} from "../TaskType";

describe('FilterByStatusPipe', () => {
  it('create an instance', () => {
    let pipe = new FilterByStatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('filter by a status', () => {
    let pipe = new FilterByStatusPipe();
    let tasks: ITaskType[] = [];
    tasks.push(new TaskType({id: 101, title: "title", description: "description", status: StatusEnum.TODO}));
    tasks.push(new TaskType({id: 102, title: "title", description: "description", status: StatusEnum.DOING}));
    tasks.push(new TaskType({id: 103, title: "title", description: "description", status: StatusEnum.DOING}));
    tasks.push(new TaskType({id: 104, title: "title", description: "description", status: StatusEnum.DONE}));
    expect(pipe.transform(tasks, StatusEnum.DOING).length).toBe(2);
    expect(pipe.transform(tasks, StatusEnum.DONE).length).toBe(1);
  });
});
