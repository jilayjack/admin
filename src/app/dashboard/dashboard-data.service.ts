import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from './dashboard-model';
@Injectable()
export class DashboardDataService {

url:string="http://localhost:3000/student/";
urlcs:string="http://localhost:3000/course_stu/";

url1:string="http://localhost:3000/delallstudent/";
url2:string="http://localhost:3000/approvestu/";


content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }

  getAllStudents(){
    return this.http.get<Student>(this.urlcs);
  }
  deleteStudent(id:number){

return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
}
delteAllCourse(stu:Student[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
ApproveAllStudent(stu:Student[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url2,body,{headers:new HttpHeaders().set(this.content,this.value)});
}

addStudent(stu:Student){
  let body=JSON.stringify(stu);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updatestudent(id,stu:Student){
  let body=JSON.stringify(stu);
  return this.http.put(this.url+id,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
getstuById(id)
{
  return this.http.get<Student[]>(this.url+id);
}

}
