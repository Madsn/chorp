import { AccountTransaction } from './../../../models/account-transaction.model';
import { AllowanceAccountService } from './../shared/allowance-account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allowance-account',
  templateUrl: './allowance-account.component.html',
  styleUrls: ['./allowance-account.component.css']
})
export class AllowanceAccountComponent implements OnInit {
  private accountTransactions: AccountTransaction[] = [];

  constructor(private _allowanceAccountService: AllowanceAccountService) { }

  ngOnInit() {
    this._allowanceAccountService.getAccountTransactions()
      .subscribe(transactions => {
        this.accountTransactions = transactions;
      });
  }
}
