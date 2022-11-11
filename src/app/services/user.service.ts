import { Injectable } from '@angular/core';
import { docData, Firestore } from '@angular/fire/firestore';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { ProfileUser } from './user.profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.auth.currentUser$.pipe(
      switchMap(user => {
        if (!user?.uid){
          return of(null);
        }
        const ref = doc(this.firestore,'users',user?.uid)
        return docData(ref) as Observable<ProfileUser>
      })
    );
  }

  constructor(private firestore:Firestore,private auth:AuthenticationService) { }

  addUser(user:ProfileUser):Observable<any>{
    const ref = doc(this.firestore, 'users',user?.uid)
    return from(setDoc(ref,user))
  }

  updateUser(user:ProfileUser):Observable<any>{
    const ref = doc(this.firestore, 'users',user?.uid)
    return from(updateDoc(ref,{...user}))
  }

}