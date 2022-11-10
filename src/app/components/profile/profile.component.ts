import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngprojService } from 'src/app/services/angproj.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth:AuthenticationService,public angservice:AngprojService) { }
  
 profileForm = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    mob: new FormControl(''),
    country: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl('')
 })

  ngOnInit(): void {
      this.angservice.getPol().toPromise().then(res=>{
      console.log(res)
      // for (let key in res)
      //  if(res.hasOwnProperty(key))
        // this.polArray.push(res[key]);
      // console.log(this.polArray)
      })
    }

    saveProfile(){
      
    }
}