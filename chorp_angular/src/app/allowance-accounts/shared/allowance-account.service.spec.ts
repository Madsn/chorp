/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllowanceAccountService } from './allowance-account.service';

describe('AllowanceAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowanceAccountService]
    });
  });

  it('should ...', inject([AllowanceAccountService], (service: AllowanceAccountService) => {
    expect(service).toBeTruthy();
  }));
});
