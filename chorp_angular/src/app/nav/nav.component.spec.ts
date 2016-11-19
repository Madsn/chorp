/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {NavComponent} from './nav.component';
import {AppRoutingModule, routableComponents} from "../app-routing.module";
import {StatusPipe} from "../tasks/types/status/status.pipe";
import {APP_BASE_HREF} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule} from "@angular/forms";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [NavComponent, routableComponents, StatusPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
