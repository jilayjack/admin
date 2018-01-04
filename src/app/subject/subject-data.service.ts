import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from './subject-model';

@Injectable()
export class SubjectDataService {


 

  urlscf:string="http://localhost:3000/subject_course_faculty/";
url:string="http://localhost:3000/subject/";
url1:string="http://localhost:3000/delallsubject/";

content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }

  getAllSubject(){
    return this.http.get<Subject>(this.urlscf);
  }
  deleteSubject(id:number){

return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
}
addSubject(stu:Subject){
  let body=JSON.stringify(stu);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updateSubject(id,stu:Subject){
  let body=JSON.stringify(stu);
  return this.http.put(this.url+id,body,{headers:new HttpHeaders().set(this.content,this.value)});
}

delteAllsubject(stu:Subject[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}

getSubjectById(id)
{
  return this.http.get<Subject[]>(this.url);
}


}
