import { Account } from './account.model';

export class AccountTransaction {
  account: Account;
  transactionTime: Date;
  amount: number;
}
