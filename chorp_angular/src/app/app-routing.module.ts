import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'tasks', pathMatch: 'full', component: TasksComponent },
  { path: 'allowances', loadChildren: 'app/allowance-accounts/allowance-accounts.module#AllowanceAccountsModule' },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routableComponents = [
  HomeComponent,
  TasksComponent,
  PageNotFoundComponent
];
