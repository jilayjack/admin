import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Login } from './login-model';
@Injectable()
export class LoginDataService {
  url:string="http://localhost:3000/admin/";
  content:string="Content-Type";
  value:string="application/json";
  
    constructor(public http:HttpClient) { }
    getlogin(stu:Login){
      let body=JSON.stringify(stu);
      return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
    }
  
  }
  