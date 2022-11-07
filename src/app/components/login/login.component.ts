import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngprojService } from 'src/app/services/angproj.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private router:Router,private angService:AngprojService) { }

  loginForm = this.fb.group({
    username : "",
    password : ["",Validators.required]
  })

  onLogin(){
    console.warn(this.loginForm.value);
  }

  navigate(){
    this.router.navigate(['/create'])
  }

  ngOnInit(): void {
    this.angService.getPol().subscribe((res)=>{
      // console.log()
    })
  }

}