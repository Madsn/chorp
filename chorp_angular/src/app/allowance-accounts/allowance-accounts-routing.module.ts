import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowanceAccountsComponent } from './allowance-accounts.component';
import { AllowanceAccountComponent } from './allowance-account/allowance-account.component';

const routes: Routes = [
  {
    path: '',
    component: AllowanceAccountsComponent,
    children: [
      {
        path: '',
        component: AllowanceAccountComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowanceAccountsRoutingModule { }

export const routedComponents = [AllowanceAccountsComponent, AllowanceAccountComponent];
