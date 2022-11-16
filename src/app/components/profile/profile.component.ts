import { Component, OnInit } from '@angular/core';
import { onValue, ref } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth:AuthenticationService) { }
  
  detailArray:any = []

  ngOnInit(): void {
    const db = getDatabase()
    const starCountRef = ref(db, 'users/' + this.auth.userData.uid)
  onValue(starCountRef,(snapshot)=>{
    this.detailArray.push(snapshot.val())
    console.log(this.detailArray)
    console.log(this.auth.userData.uid)
  })
   }

}