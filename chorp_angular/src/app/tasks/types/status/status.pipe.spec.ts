/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StatusPipe } from './status.pipe';
import {StatusEnum} from "./StatusType";

describe('StatusPipe', () => {
  it('create an instance', () => {
    let pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert from enum to string', () => {
    let pipe = new StatusPipe();
    expect(pipe.transform(StatusEnum.DOING)).toBe("Doing");
    expect(pipe.transform(StatusEnum.DONE)).toBe("Done");
    expect(pipe.transform(StatusEnum.TODO)).toBe("Todo");
  });

  it('handle incorrect inputs gracefully', () => {
    let pipe = new StatusPipe();
    expect(pipe.transform(null)).toBe("-");
    expect(pipe.transform('test string')).toBe("-");
    expect(pipe.transform(1324312333)).toBe("-");
  });
});
