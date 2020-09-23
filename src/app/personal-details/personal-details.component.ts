import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['../../assets/css/style.css','../../assets/css/custom.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  refresh1(){
    this.router.navigate(['/personal-details'])
    .then(() =>{
      window.location.reload();
    })
  }

}
