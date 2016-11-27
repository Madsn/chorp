/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TasksListComponent} from './tasks-list.component';
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {StatusLabelComponent} from "../status-label/status-label.component";
import {FilterByStatusPipe} from "../tasks/types/status/filter-by-status.pipe";
import {StatusPipe} from "../tasks/types/status/status.pipe";

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragulaModule],
      declarations: [TasksListComponent, StatusLabelComponent, FilterByStatusPipe, StatusPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
