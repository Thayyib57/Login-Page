import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngprojService } from 'src/app/services/angproj.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
// import { Database,set,ref } from '@angular/fire/database';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb:FormBuilder,private toastr:ToastrService,private router:Router,public auth:AuthenticationService,public angService:AngprojService) { }
  hide = true
  // email: any;
  // password: any;

  submit=false
  createForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    firstname: ['',Validators.required],
    lastname: ['',Validators.required],
    password: ['',[Validators.required,Validators.minLength(6)]],
    mob: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    address: ['',Validators.required],
    country: ['',Validators.required],
    dob: ['',Validators.required],
    gender: ['',Validators.required],
  })

  ngOnInit(): void {
  }

  onSubmit(value:any){
    this.submit=true
    console.log(this.createForm.value)
    this.angService.postPol(this.createForm.value).subscribe((res)=>{
      console.log({res})
      this.toastr.success('Successfully Created', 'Success');
      this.createForm.reset()
    })
    this.router.navigate(['login'])
    // set(ref(this.database,'/users'+ value.any),{
    //   email : value.email,
    //   firstname: value.firstname,
    //   lastname: value.lastname,
    //   password: value.password,
    //   mob :value.mob,
    //   address: value.address,
    //   country: value.country,
    //   dob: value.dob,
    //   gender: value.gender
    // });
    // alert("user created")
  }
  get allControls(){
    return this.createForm.controls
  }
}