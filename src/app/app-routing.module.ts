import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckinComponent } from './checkin/checkin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'checkin',component: CheckinComponent},
  {path:'personal-details',component:PersonalDetailsComponent},
  {path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [DashboardComponent,CheckinComponent,LoginComponent,PersonalDetailsComponent,PageNotFoundComponent]