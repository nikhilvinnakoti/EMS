import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    
  }
  refresh(){
    this.router.navigate(['/checkin'])
    .then(() => {
      window.location.reload();
    });
  }
 

  

}
