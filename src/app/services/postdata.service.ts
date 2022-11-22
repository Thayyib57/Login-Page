import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { push,ref } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(private db:Database) { }

  post(form:any,uid:any){
    push(ref(this.db, 'posts/'),{
      postdata: form.value.postdata,
      userId: uid
    }).then((result)=>{
      console.log(result.key);
      console.log(uid);
    }),form.reset()
  }
}