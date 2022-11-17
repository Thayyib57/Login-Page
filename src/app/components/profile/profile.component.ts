import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { onValue, ref } from '@angular/fire/database';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { concatMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth:AuthenticationService,private firebase:FirebaseApp,private afAuth:AngularFireAuth,private image:ImageService,private toast: HotToastService) { }
  
  detailArray:any = []
  user$ = this.auth.currentUser$

  ngOnInit(): void {
    this.firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.getUserData(user.uid)
        // console.log(user.uid)
      }
    })
  }
  getUserData(uid:any){
    const db = getDatabase()
    const starCountRef = ref(db, 'users/' + uid)
    onValue(starCountRef,(snapshot)=>{
    this.detailArray.push(snapshot.val())
    console.log(this.detailArray)
    console.log(this.auth.userData.uid)
  })
  }

  uploadImage(event:any, user:User){
    this.image.uploadImage(event.target.files[0],`images/profile/${user.uid}`).pipe(
      this.toast.observe({
        loading: 'Uploading profile image...',
        success: 'Image uploaded successfully',
        error: 'There was an error in uploading the image'
      }),
      concatMap((photoURL)=>this.auth.updateProfile({photoURL}))
    ).subscribe();
  }

}