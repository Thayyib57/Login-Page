import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landline',
  templateUrl: './landline.component.html',
  styleUrls: ['./landline.component.css']
})
export class LandlineComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['/login']);
    }, 3000);
  }

  
}