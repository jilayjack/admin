import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from './subject-data.service';
import { Subject } from './subject-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
public subject:Subject[]=[];
public subject1:Subject[]=[];
public delarr:Subject[]=[];
constructor(public _data:SubjectDataService,public _r:Router) { }

  ngOnInit() {
    this._data.getAllSubject().subscribe(
      (data:any)=>{
        this.subject=data;
        this.subject1=data;
      
      }
    );
  }

  search(item)
  {
    if(item!=''){
    this.subject=this.subject1.filter((x)=>x.sub_title.indexOf(item)!==-1)
    }
    else{
      this.subject=this.subject1
    }
  }
  onsubDelete(item){

    this._data.deleteSubject(item.sub_id).subscribe(
      (data:any)=>{
        this.subject.splice(this.subject.indexOf(item),1);
      }
    );
  }
  onupdate(item)
  {
    this._r.navigate(["/update-subject",item.sub_id]);
  }
  i:number=0;
  checkChange(item:Subject)
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
    this._data.delteAllsubject(this.delarr).subscribe(
      
        (data:any)=>{
          
          for(this.i=0 ; this.i<this.delarr.length ; this.i++)
          {
             

                this.subject.splice(this.subject.indexOf(this.delarr[this.i]),1);
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
