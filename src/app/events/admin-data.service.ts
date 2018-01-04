import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Event } from './events-model';

@Injectable()
export class UserDataService {
public url:string="http://localhost:3000/event/";
public urlc:string="http://localhost:3000/event_course/";

public url1:string="http://localhost:3000/delallevent/";
content:string="Content-Type";
value:string="application/json";


  constructor(public _http:HttpClient) { }

  getAllevent(){
    return this._http.get<Event>(this.urlc);
  }
  /*getAllstu()
{
  return this._http.get<Home>(this.url1);
}*/

addUser(user:Event){
  let body=JSON.stringify(user);
  return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
deleteUser(id:string){
  return this._http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
}

delteAllevents(stu:Event[]){
  let body=JSON.stringify(stu);
  return this._http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updateUser(id,user:Event){
  let body=JSON.stringify(user);
  return this._http.put(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
geteventById(id)
{
  return this._http.get<Event[]>(this.url+id);
}
}