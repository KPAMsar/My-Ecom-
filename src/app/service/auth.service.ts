import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myheader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization:'sdfsfsdff'
  });
  url:string="http://127.0.0.1:8000/api/signup";
  getUsersUrl:string="http://127.0.0.1:8000/api/users";

  constructor(private http:HttpClient) { }

  signup(data:string){
    return this.http.post(this.url, data,{headers:this.myheader});
  }


  getUsers(){
    return this.http.get(this.getUsersUrl);
  }
}
