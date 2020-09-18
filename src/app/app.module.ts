import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTasksToCheckoutComponent } from './add-tasks-to-checkout/add-tasks-to-checkout.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalDetailsBankComponent } from './personal-details-bank/personal-details-bank.component';
import { PersonalDetailsEditComponent } from './personal-details-edit/personal-details-edit.component';
import { PersonalDetailsQualificationComponent } from './personal-details-qualification/personal-details-qualification.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTasksToCheckoutComponent,
    AttendenceListComponent,
    BirthdayComponent,
    ChangePasswordComponent,
    CheckinComponent,
    CheckoutComponent,
    CheckoutSuccessComponent,
    DashboardComponent,
    LoginComponent,
    PersonalDetailsComponent,
    PersonalDetailsBankComponent,
    PersonalDetailsEditComponent,
    PersonalDetailsQualificationComponent,
    TaskDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
