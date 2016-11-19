/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TasksComponent} from './tasks.component';
import {StatusPipe} from "./types/status/status.pipe";
import {FormsModule} from "@angular/forms";
import {StatusType} from "./types/status/StatusType";
import {TaskType} from "./types/TaskType";

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TasksComponent, StatusPipe]
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

  it('should have a task model', () => {
    expect(component.newTask).toBeTruthy();
  });

  it('should create new tasks with default values', () => {
    const title = "My title 332134";
    component.newTask.title = title;
    expect(component.newTask.title).toBe(title);
    const savedTask: TaskType = component.saveNewTask();
    expect(savedTask.title).toBe(title);
    expect(savedTask.status).toBe(StatusType.TODO);
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
    expect(component.newTask.created).toBeFalsy();
  });

  it('should properly clear title', () => {
    const title = "My title";
    component.newTask.title = title;
    expect(component.newTask.title).toBe(title);
    component.resetNewTaskTitle();
    expect(component.newTask.title).toBeNull();
  });
});
