import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AttendenceListComponent,
    BirthdayComponent,
    ChangePasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
