/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatusLabelComponent } from './status-label.component';
import {StatusEnum} from "../tasks/types/status/StatusType";
import {StatusPipe} from "../tasks/types/status/status.pipe";

describe('StatusLabelComponent', () => {
  let component: StatusLabelComponent;
  let fixture: ComponentFixture<StatusLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLabelComponent, StatusPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
