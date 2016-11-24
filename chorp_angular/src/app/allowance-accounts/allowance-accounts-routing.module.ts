import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowanceAccountsComponent } from './allowance-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: AllowanceAccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowanceAccountsRoutingModule { }

export const routedComponents = [AllowanceAccountsComponent];
