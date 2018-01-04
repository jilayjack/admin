import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course/course-data.service';
import { Course } from '../course/course-model';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  id:number;
  title:string='';
  duration:number;
  fees:number;
  desc:string='';
  _Subscription:Subscription;
  constructor(public _data:CourseDataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["c_id"];
        console.log(this.id);
        }
    );
    this._data.getCourseById(this.id).subscribe(
      (data:Course[])=>{
        this.title=data[0].course_title;
        this.duration=data[0].course_duration;
        this.fees=data[0].course_fees;
        this.desc=data[0].course_desc;
      }
    );
    }
    onupdate()
    {
      
        let item=new Course(null,this.title,this.desc,this.duration,this.fees);
        this._data.updateCourse(this.id,item).subscribe(
              (data:any)=>{
              console.log(data);
              
                //alert('thai gayu');
                this._r.navigate(["/course"]);
              }
            );
      
      
    }
  }


