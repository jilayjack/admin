import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { News } from './newsfeed-model';

@Injectable()
export class NewsfeedDataService {

 


url:string="http://localhost:3000/news/";
url1:string="http://localhost:3000/delallnewsfeed/";

content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }

getAllnews(){
  return this.http.get<News>(this.url);
}
deletenews(id:number){

return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
}
addnews(stu:News){
  let body=JSON.stringify(stu);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updatenews(id,stu:News){
  let body=JSON.stringify(stu);
  return this.http.put(this.url+id,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
delteAllnews(stu:News[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
getNewsById(id)
{
  return this.http.get<News[]>(this.url);
}

}

