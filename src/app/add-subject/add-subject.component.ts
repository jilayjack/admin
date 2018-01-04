import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from '../subject/subject-data.service';
import { Subject } from '../subject/subject-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
title:string='';
desc:string='';
course:number;
  constructor(public _data:SubjectDataService,public _r:Router) { }

  ngOnInit() {
  }
add()
{
  let item=new Subject(null,this.title,this.desc,null,this.course);
  this._data.addSubject(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          alert('thai gayu');
          //this._r.navigate(["/newsfeed"]);
        }
      );

}
}
