/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TasksComponent} from './tasks.component';
import {StatusPipe} from "./types/status/status.pipe";
import {FormsModule} from "@angular/forms";

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

  it('should properly clear title', () => {
    const title = "My title";
    component.newTask.title = title;
    expect(component.newTask.title).toBe(title);
    component.resetTitle();
    expect(component.newTask.title).toBeNull();
  });
});
