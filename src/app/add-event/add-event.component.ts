import { Component, OnInit } from '@angular/core';
import { Event } from '../events/events-model';
import { UserDataService } from '../events/admin-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
title:string='';
desc:string='';
location:string='';
img:string='';
date:Date;
seminar:string='';
  constructor(public _data:UserDataService,public _r:Router) { }

  ngOnInit() {
  }
add(){
  let item=new Event(null,this.title,this.desc,this.location,this.img,this.date,this.seminar,2);
this._data.addUser(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          alert('thai gayu');
          //this._r.navigate(["/newsfeed"]);
        }
      );
  

}
}
