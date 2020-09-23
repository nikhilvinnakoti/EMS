import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTasksToCheckoutComponent } from './add-tasks-to-checkout/add-tasks-to-checkout.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'checkin', component: CheckinComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'add-tasks-to-checkout', component: AddTasksToCheckoutComponent },
    { path: 'checkout-success', component: CheckoutSuccessComponent },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,CheckinComponent,CheckoutComponent,AddTasksToCheckoutComponent,CheckoutSuccessComponent 
    ,]