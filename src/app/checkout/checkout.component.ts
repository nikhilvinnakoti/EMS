import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  refresh(){
    this.router.navigate(['/add-tasks-to-checkout'])
    .then(() => {
      window.location.reload();
    });
  }
}
