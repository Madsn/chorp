/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TasksComponent} from './tasks.component';
import {StatusPipe} from "./types/status/status.pipe";
import {FormsModule} from "@angular/forms";
import {StatusEnum} from "./types/status/StatusType";
import {TaskType, ITaskType} from "./types/TaskType";
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {StatusLabelComponent} from "../status-label/status-label.component";
import {FilterByStatusPipe} from "./types/status/filter-by-status.pipe";
import {TasksListComponent} from "../tasks-list/tasks-list.component";

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, DragulaModule],
      declarations: [TasksComponent, TasksListComponent, StatusPipe, FilterByStatusPipe, StatusLabelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new tasks with default values', () => {
    const title = "My title 332134";
    component.newTask.title = title;
    expect(component.newTask.title).toBe(title);
    const savedTask: ITaskType = component.saveNewTask();
    expect(savedTask.title).toBe(title);
    expect(savedTask.status).toBe(StatusEnum.TODO);
    expect(savedTask.created).toBeTruthy();
    expect(savedTask.created.getDate() == new Date().getDate()).toBeTruthy();
  });

  it('should create a new model instance on save', () => {
    const title = "My title";
    component.newTask.title = title;
    expect(component.newTask.title).toBe(title);
    component.saveNewTask();
    expect(component.newTask.title).toBeFalsy();
    expect(component.newTask.status).toBeFalsy();
  });

  it('should properly clear title', () => {
    const title = "My title";
    component.newTask.title = title;
    expect(component.newTask.title).toBe(title);
    component.resetNewTaskTitle();
    expect(component.newTask.title).toBeNull();
  });
});
