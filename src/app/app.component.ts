import { Component,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject';

  constructor(public auth:AuthenticationService,private router:Router){}

  user$ = this.auth.currentUser$

}
