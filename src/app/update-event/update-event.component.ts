import { Component, OnInit } from '@angular/core';
import { UserDataService} from '../events/admin-data.service';
import { Event } from '../events/events-model';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';
import { Course } from '../course/course-model';
import { CourseDataService } from '../course/course-data.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  public course:Course[]=[];
  id:number;
  title:string='';
  desc:string='';
  location:string='';
  img:string='';
  date:Date;
  seminar:string='';
  fk_course_id:number;
  _Subscription:Subscription;
 
  constructor(public _r:Router,public _activerouter:ActivatedRoute,public _data:UserDataService,public _cs:CourseDataService) { }

  ngOnInit() {
    this._cs.getAllCourses().subscribe(
      (data:any)=>{
        this.course=data;
        console.log(data);
      }
    )
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["e_id"];
        }
      );
      this._data.geteventById(this.id).subscribe(
        (data:Event[])=>{
          this.title=data[0].event_title;
          this.desc=data[0].event_desc;
          this.location=data[0].event_location;
          this.img=data[0].event_img;
          this.date=data[0].event_date;
          this.seminar=data[0].seminar_video;
          this.fk_course_id=data[0].fk_course_id;
        
        }
      );
  
  }


  onupdate()
  {
    
      let item=new Event(null,this.title,this.desc,this.location,this.img,this.date,this.seminar,this.fk_course_id);
      this._data.updateUser(this.id,item).subscribe(
            (data:any)=>{
            console.log(data);
            
              //alert('thai gayu');
              this._r.navigate(["/events"]);
            }
          );
    
    
  }


}
