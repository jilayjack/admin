import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Faculty } from './faculty-model';

@Injectable()
export class FacultyDataService {
  url:string="http://localhost:3000/faculty/";
  url1:string="http://localhost:3000/delallfaculty/";
  
content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }
  getAllFaculty(){
    return this.http.get<Faculty>(this.url);
  }
  deleteFaculty(id:number){
  
  return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
  }
  addFaculty(facu:Faculty){
    let body=JSON.stringify(facu);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
  }
  updateFaculty(id,facu:Faculty){
    let body=JSON.stringify(facu);
    return this.http.put(this.url+id,body,{headers:new HttpHeaders().set(this.content,this.value)});
  }
  delteAllFaculty(facu:Faculty[]){
    let body=JSON.stringify(facu);
    return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
  }
  
  getFacultyById(id)
  {
    return this.http.get<Faculty[]>(this.url+id);
  }
  
}
