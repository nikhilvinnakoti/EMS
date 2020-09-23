import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTasksToCheckoutComponent } from './add-tasks-to-checkout/add-tasks-to-checkout.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  { path: 'checkin', component: CheckinComponent,children:[
    { path: 'child', component: ChildComponent }
  ] },
  { path: 'checkout', component: CheckoutComponent, children:[
    { path: 'child', component: ChildComponent }
  ] },
  { path: 'add-tasks-to-checkout', component: AddTasksToCheckoutComponent,children:[
    { path: 'child', component: ChildComponent }
  ] },
  { path: 'checkout-success', component: CheckoutSuccessComponent,children:[
    { path: 'child', component: ChildComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, CheckinComponent, CheckoutComponent, AddTasksToCheckoutComponent, CheckoutSuccessComponent, ChildComponent]