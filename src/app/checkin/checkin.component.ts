import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class CheckinComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {
  }
  refresh(){
    this.router.navigate(['/checkout'])
    .then(() => {
      window.location.reload();
    });
  }

}
