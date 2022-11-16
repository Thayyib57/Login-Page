// import { Injectable } from '@angular/core';
// import { doc, DocumentData, DocumentReference, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
// import { Observable, from } from 'rxjs';
// import { AuthenticationService } from './authentication.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private firestore:Firestore,private auth:AuthenticationService) { }

//   get currentUserProfile$(): Observable<ProfileUser | null> {
//     return this.auth.currentUser$.pipe(
//       switchMap((user) => {
//         if (!user?.uid) {
//           return of(null);
//         }

//         const ref = doc(this.firestore, 'users', user?.uid);
//         return docData(ref) as Observable<ProfileUser>;
//       })
//     );
//   }

//   addUser(user: ProfileUser): Observable<void> {
//     const ref = doc(this.firestore, 'users', user.uid);
//     return from(setDoc(ref, user));
//   }

//   updateUser(user: ProfileUser): Observable<void> {
//     const ref = doc(this.firestore, 'users', user.uid);
//     return from(updateDoc(ref, { ...user }));
//   }

// }

// function switchMap(arg0: (user: any) => any): any {
//   throw new Error('Function not implemented.');
// }


// function of(arg0: null) {
//   throw new Error('Function not implemented.');
// }


// function docData(ref: DocumentReference<DocumentData>): Observable<ProfileUser> {
//   throw new Error('Function not implemented.');
// }
