/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StatusPipe } from './status.pipe';
import {StatusType} from "./StatusType";

describe('StatusPipe', () => {
  it('create an instance', () => {
    let pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert from enum to string', () => {
    let pipe = new StatusPipe();
    expect(pipe.transform(StatusType.DOING)).toBe("Doing");
  });
});
