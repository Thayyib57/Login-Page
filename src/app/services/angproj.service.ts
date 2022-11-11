import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AngprojService {

  constructor(private http:HttpClient) { }

  // getPol(){
  //   return this.http.get<any>('')
  // }

  postPol(data:any){
    return this.http.post<any>('',data)
  }
  
}