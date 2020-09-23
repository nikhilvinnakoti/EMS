import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  
   }
   ngOnInit(): void {
  }
  refresh(){
    this.router.navigate(['/dashboard'])
    .then(() => {
      window.location.reload();
    });
  }
  
}
