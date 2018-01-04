import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Course } from './course-model';
@Injectable()
export class CourseDataService {

url:string="http://localhost:3000/course/";
url1:string="http://localhost:3000/delcourse/";

content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }

getAllCourses(){
  return this.http.get<Course>(this.url);
}
deleteCourse(id:number){

return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
}
addCourse(stu:Course){
  let body=JSON.stringify(stu);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updateCourse(id,stu:Course){
  let body=JSON.stringify(stu);
  return this.http.put(this.url+id,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
delteAllCourse(stu:Course[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}

getCourseById(id)
{
  return this.http.get<Course[]>(this.url+id);
}

}
