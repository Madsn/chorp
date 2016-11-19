/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import {StatusType} from "./types/status/StatusType";

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService]
    });
  });

  it('should return some tasks', inject([TasksService], (service: TasksService) => {
    expect(service.getAll().length).toBeGreaterThan(0);
  }));

  it('should be able to save a new task', inject([TasksService], (service: TasksService) => {
    const beforeCount: Number = service.getAll().length;
    service.add({id: 100, title: "title!!", description: "asd", assignee: 10, status: StatusType.DOING, created: new Date(), dueDate: new Date()});
    service.add({id: 101, title: "title!!", description: "asd", assignee: 10, status: StatusType.DOING, created: new Date(), dueDate: new Date()});
    const afterCount: Number = service.getAll().length;
    expect(afterCount).toBe(beforeCount + 2);
  }));
});
