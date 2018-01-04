import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course/course-data.service';
import { Course } from '../course/course-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
title:string='';
duration:number;
fees:number;
desc:string='';


  constructor(public _data:CourseDataService,public _r:Router) { }

  ngOnInit() {
  }

add()
{
  let item=new Course(null,this.title,this.desc,this.duration,this.fees);
  this._data.addCourse(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          alert('thai gayu');
          //this._r.navigate(["/newsfeed"]);
        }
      );
}
}
