import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tasks-to-checkout',
  templateUrl: './add-tasks-to-checkout.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class AddTasksToCheckoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  refresh(){
    this.router.navigate(['/checkout-success'])
    .then(() => {
      window.location.reload();
    });
  }

}
