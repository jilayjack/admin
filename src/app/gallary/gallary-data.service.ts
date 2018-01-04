import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Gallary } from './gallary-model';
@Injectable()
export class GallaryDataService {

url:string="http://localhost:3000/gellary/";
url1:string="http://localhost:3000/delallimg/";
content:string="Content-Type";
value:string="application/json";
  constructor(public http:HttpClient) { }

getAllimg(){
  return this.http.get<Gallary>(this.url);
}
deleteimg(id:number){

return this.http.delete(this.url+id,{headers:new HttpHeaders().set(this.content,this.value)});
}
delteAllImages(stu:Gallary[]){
  let body=JSON.stringify(stu);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
addimg(stu:Gallary){
  let body=JSON.stringify(stu);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set(this.content,this.value)});
}
updateimg(stu:Gallary){
  let body=JSON.stringify(stu);
  return this.http.put(this.url+stu.pic_id,body,{headers:new HttpHeaders().set(this.content,this.value)});
}

}
