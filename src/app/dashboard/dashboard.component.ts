import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from './dashboard-data.service';
import { Student } from './dashboard-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public home:Student[]=[];
  public home1:Student[]=[];
  public delarr:Student[]=[];
  public approve:Student[]=[];
  email_id:string='';
    constructor(public _data:DashboardDataService,public _r:Router) { }
  
    ngOnInit() {
      this.email_id=localStorage.getItem('Email');
      this._data.getAllStudents().subscribe(
        (data:any)=>{
          this.home=data;
          this.home1=data;
  
        }
      );
        }
  
    search(item)
    {
      if(item!=''){
      this.home=this.home1.filter((x)=>x.f_name.indexOf(item)!==-1)
      }
      else{
        this.home=this.home1
      }
    }
    onStudentDelete(item){
  
      this._data.deleteStudent(item.stu_id).subscribe(
        (data:any)=>{
          this.home.splice(this.home.indexOf(item),1);
        }
      );
    }
    onupdatec(item)
  {
    this._r.navigate(["/viewmore",item.stu_id]);
  }
  onupdate(item){
    this._r.navigate(["/update-student",item.stu_id]);
    
  }
   
    i:number=0;
    checkChange(item:Student)
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
               
  
                  this.home.splice(this.home.indexOf(this.delarr[this.i]),1);
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
  
  