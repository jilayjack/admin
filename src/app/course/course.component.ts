import { Component, OnInit } from '@angular/core';
import { Course } from './course-model';
import { CourseDataService } from './course-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
public course:Course[]=[];
public course1:Course[]=[];
public delarr:Course[]=[];

constructor(public _data:CourseDataService,public _r:Router) { }

  ngOnInit() {
this._data.getAllCourses().subscribe(
      (data:any)=>{
        this.course=data;
        this.course1=data;
        
      }
    );
  }
  search(item)
  {
    if(item!=''){
    this.course=this.course1.filter((x)=>x.course_title.indexOf(item)!==-1)
    }
    else{
      this.course=this.course1
    }
  }

  oncoursetDelete(item){

    this._data.deleteCourse(item.course_id).subscribe(
      (data:any)=>{
        this.course.splice(this.course.indexOf(item),1);
      }
    );
  }
  onupdatec(item)
  {
    this._r.navigate(["/update-course",item.course_id]);
  }
  
  i:number=0;
  checkChange(item:Course)
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
    this._data.delteAllCourse(this.delarr).subscribe(
      
        (data:any)=>{
          
          for(this.i=0 ; this.i<this.delarr.length ; this.i++)
          {
             

                this.course.splice(this.course.indexOf(this.delarr[this.i]),1);
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


