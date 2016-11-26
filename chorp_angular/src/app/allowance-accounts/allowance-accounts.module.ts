import { AllowanceAccountService } from './shared/allowance-account.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AllowanceAccountsRoutingModule, routedComponents } from './allowance-accounts-routing.module';

@NgModule({
  imports: [AllowanceAccountsRoutingModule, CommonModule],
  declarations: [routedComponents],
  providers: [AllowanceAccountService]
})
export class AllowanceAccountsModule { }
