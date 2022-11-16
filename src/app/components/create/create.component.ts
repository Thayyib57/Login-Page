import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,ValidationErrors,ValidatorFn,Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AngprojService } from 'src/app/services/angproj.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb:FormBuilder,public auth:AuthenticationService,public angService:AngprojService,private toast:HotToastService) { }
  hide = true

  submit=false
  createForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    password: ['',[Validators.required,Validators.minLength(6)]],
    confirmPassword: ['',[Validators.required,Validators.minLength(6)]],
    phone: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    address: ['',Validators.required],
    country: ['',Validators.required],
    birth: ['',Validators.required],
    gender: ['',Validators.required],
  },
  { validators: passwordsMatchValidator() });

  ngOnInit(): void {
  }

  SignUp(){
    this.auth.SignUp(this.createForm)
    this.toast.observe({
      loading: 'Signing up...',
      success: 'Congrats! You are all signed up',
      error: 'There was an error occur'
    })
  }

  get allControls(){
    return this.createForm.controls
  }

}