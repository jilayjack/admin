import { Component, OnInit } from '@angular/core';
import { StudentDataService } from './student-data.service';
import { Student } from './student-model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public home:Student[]=[];
public home1:Student[]=[];
public delarr:Student[]=[];
//public approve:Student[]=[];
email_id:string='';
  constructor(public _data:StudentDataService) { }

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


  approveAll()
  {
    
    if(confirm("Are You Sure want to Approve?"))
    {
    this._data.ApproveAllStudent(this.delarr).subscribe(
      
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


  approve(item)
  {
    
    if(confirm("Are You Sure want to Approve?"))
    {
    this._data.ApproveAllStudent(item.stu_id).subscribe(
      (data:any)=>{
        this.home.splice(this.home.indexOf(item),1);
        //   console.log("Complete");
}



);

      
  }
  


  
}
