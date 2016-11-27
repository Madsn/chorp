/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import {StatusEnum} from "./types/status/StatusType";
import {TaskType, ITaskType} from "./types/TaskType";

function createTask(status: StatusEnum): ITaskType {
  return new TaskType().setId(100).setStatus(status);
}

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService]
    });
  });

  it('should return some tasks', inject([TasksService], (service: TasksService) => {
    service.add(createTask(StatusEnum.DOING));
    expect(service.getAll().length).toBeGreaterThan(0);
  }));

  it('should be able to save a new task', inject([TasksService], (service: TasksService) => {
    const beforeCount: number = service.getAll().length;
    service.add(createTask(StatusEnum.DOING));
    service.add(createTask(StatusEnum.DOING));
    const afterCount: number = service.getAll().length;
    expect(afterCount).toBe(beforeCount + 2);
  }));

  it('should be able to return a filtered list of tasks', inject([TasksService], (service: TasksService) => {
    const beforeCountTotal: number = service.getAll().length;
    const beforeCountDoing: number = service.getAll(StatusEnum.DOING).length;
    service.add(createTask(StatusEnum.DOING));
    service.add(createTask(StatusEnum.TODO));
    service.add(createTask(StatusEnum.DONE));
    const afterCountTotal: number = service.getAll().length;
    const afterCountDoing: number = service.getAll(StatusEnum.DOING).length;
    expect(afterCountTotal).toBe(beforeCountTotal + 3);
    expect(afterCountDoing).toBe(beforeCountDoing + 1);
  }));

  it('should be able to update a task status', inject([TasksService], (service: TasksService) => {
    const task = createTask(StatusEnum.DOING);
    service.add(task);
    expect(service.getAll(StatusEnum.DOING).length).toBe(1);
    expect(service.getAll(StatusEnum.DONE).length).toBe(0);
    service.updateStatus(task.id, StatusEnum.DONE);
    expect(service.getAll(StatusEnum.DOING).length).toBe(0);
    expect(service.getAll(StatusEnum.DONE).length).toBe(1);
  }));
});
