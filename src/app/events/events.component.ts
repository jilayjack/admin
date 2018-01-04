import { Component, OnInit } from '@angular/core';
import { UserDataService } from './admin-data.service';
import { Event } from './events-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
public events:Event[]=[];
public events1:Event[]=[];
public delarr:Event[]=[];
constructor(public _data:UserDataService,public _r:Router) { }

  ngOnInit() {
    this._data.getAllevent().subscribe(
      (data:any)=>{
        this.events=data;
        this.events1=data;
      
      }
    );
  }

  search(item)
  {
    if(item!=''){
    this.events=this.events1.filter((x)=>x.event_title.indexOf(item)!==-1)
    }
    else{
      this.events=this.events1
    }
  }
oneventDelete(item){

    this._data.deleteUser(item.event_id).subscribe(
      (data:any)=>{
        this.events.splice(this.events.indexOf(item),1);
      }
    );
  }
  onupdatec(item)
  {
    this._r.navigate(["/update-event",item.event_id]);
  }
  i:number=0;
  checkChange(item:Event)
  {
    
      if(this.delarr.find(x=>x==item))
      {
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else
      {
        this.delarr.push(item);
      }
      console.log(this.delarr);
    
  }
  deleteAll()
  {
    
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.delteAllevents(this.delarr).subscribe(
      
        (data:any)=>{
          
          for(this.i=0 ; this.i<this.delarr.length ; this.i++)
          {
             

                this.events.splice(this.events.indexOf(this.delarr[this.i]),1);
                console.log("Complete");

              
          }
          this.delarr=[];
          
        },
        function(err){console.log(err);},
        function(){

        }
      
    );
  }
  }

  
  }

