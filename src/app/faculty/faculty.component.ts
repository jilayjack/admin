import { Component, OnInit } from '@angular/core';
import { Faculty } from './faculty-model';
import { FacultyDataService } from './faculty-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  public faculty:Faculty[]=[];
  public  faculty1:Faculty[]=[];
  public delarr: Faculty[]=[];
  constructor(public _data:FacultyDataService,public _r:Router) { }

    ngOnInit() {
    this._data.getAllFaculty().subscribe(
          (data:any)=>{
            this.faculty=data;
            this.faculty1=data;
            
          }
        );
      }
      search(item)
      {
        if(item!=''){
        this.faculty=this.faculty1.filter((x)=>x.faculty_name.indexOf(item)!==-1)
        }
        else{
          this.faculty=this.faculty1
        }
      }
    
      onFacultyDelete(item){
    
        this._data.deleteFaculty(item.faculty_id).subscribe(
          (data:any)=>{
            this.faculty.splice(this.faculty.indexOf(item),1);
          }
        );
      }
      onupdatec(item)
      {
        this._r.navigate(["/update-faculty",item.faculty_id]);
      }
      
      i:number=0;
      checkChange(item:Faculty)
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
        this._data.delteAllFaculty(this.delarr).subscribe(
          
            (data:any)=>{
              
              for(this.i=0 ; this.i<this.delarr.length ; this.i++)
              {
                 
    
                    this.faculty.splice(this.faculty.indexOf(this.delarr[this.i]),1);
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
