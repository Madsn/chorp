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
    tasks.push(new TaskType(100, "title", "description", StatusEnum.TODO));
    tasks.push(new TaskType(101, "title", "description", StatusEnum.TODO));
    tasks.push(new TaskType(102, "title", "description", StatusEnum.DOING));
    tasks.push(new TaskType(103, "title", "description", StatusEnum.DOING));
    tasks.push(new TaskType(104, "title", "description", StatusEnum.DONE));
    console.log(tasks);
    expect(pipe.transform(tasks, StatusEnum.DOING).length).toBe(2);
    expect(pipe.transform(tasks, StatusEnum.DONE).length).toBe(1);
  });
});
