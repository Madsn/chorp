import { AccountTransaction } from '../../../models';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

let transactions = [
  {
    account: 'john',
    transactionTime: new Date(),
    amount: 2
  },
  {
    account: 'Mikkel',
    transactionTime: new Date(),
    amount: 4
  }
];

@Injectable()
export class AllowanceAccountService {

  constructor(private _http: Http) { }

  getAccountTransactions(): Observable<AccountTransaction[]> {
    return Observable.of(transactions);
  }
}
