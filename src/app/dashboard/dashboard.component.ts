import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }
  refresh(): void {
    window.location.reload();
}

  

}
