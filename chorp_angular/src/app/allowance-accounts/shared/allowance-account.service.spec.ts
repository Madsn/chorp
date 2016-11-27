import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend } from '@angular/http';

import { TestBed, inject } from '@angular/core/testing';
import { AllowanceAccountService } from './allowance-account.service';

describe('AllowanceAccountService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AllowanceAccountService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should ...', inject([AllowanceAccountService], (service: AllowanceAccountService) => {
    expect(service).toBeTruthy();
  }));
});
