import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import { TaskDetailsComponent } from './task-details/task-details.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AttendenceListComponent,
    BirthdayComponent,

    ChangePasswordComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
