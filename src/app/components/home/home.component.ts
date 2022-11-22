import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { onValue, ref } from '@angular/fire/database';
import { FormBuilder,Validators } from '@angular/forms';
import { getDatabase } from 'firebase/database';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostdataService } from 'src/app/services/postdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth:AuthenticationService,private firebase:FirebaseApp,public afAuth:AngularFireAuth,private postdata:PostdataService,private fb:FormBuilder) { }

  user$ = this.auth.currentUser$
  userId:any
  postArray:any []= []
  
  postForm = this.fb.group({
    postdata: [null,Validators.required]
  })

  ngOnInit(): void {
    this.firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.userId=user.uid
        this.getUserData(user.uid)
        // console.log(user.uid);
      }
    })
  }

  add(){
    this.postdata.post(this.postForm,this.userId)
  }

  getUserData(uid:any){
    const db = getDatabase()
    const starCountRef = ref(db, 'posts/')
    onValue(starCountRef,(snapshot)=>{
    this.postArray = snapshot.val()
    // this.postArray.push(snapshot.val())
    console.log(this.postArray)
    console.log(this.auth.userData.uid)
  })
  }

}