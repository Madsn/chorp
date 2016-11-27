import { AllowanceAccountService } from './../shared/allowance-account.service';
import { AccountTransaction } from './../../../models/account-transaction.model';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllowanceAccountComponent } from './allowance-account.component';

class AllowanceAccountServiceStub {
  getAccountTransactions(): Observable<AccountTransaction[]> {
    return Observable.of([]);
  }
}

describe('AllowanceAccountComponent', () => {
  let component: AllowanceAccountComponent;
  let fixture: ComponentFixture<AllowanceAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllowanceAccountComponent],
      providers: [
        { provide: AllowanceAccountService, useClass: AllowanceAccountServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowanceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
