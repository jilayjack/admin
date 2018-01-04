import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from '../subject/subject-data.service';
import { Subject } from '../subject/subject-model';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {
  id:number;
  sub_title:string='';
  sub_desc:string='';
  fk_course_id:number=1;
  fk_faculty_id:number=1;
  _Subscription:Subscription;
 
  constructor(public _r:Router,public _activerouter:ActivatedRoute,public _data:SubjectDataService) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["sub_id"];
        }
    );
    this._data.getSubjectById(this.id).subscribe(
      (data:Subject[])=>{
        this.sub_title=data[0].sub_title;
        this.sub_desc=data[0].sub_desc;
        this.fk_course_id=data[0].fk_course_id;
        this.fk_faculty_id=data[0].fk_faculty_id;
      }
    );
  }

  onupdate()
  {
    
      let item=new Subject(null,this.sub_title,this.sub_desc,this.fk_faculty_id,this.fk_course_id);
      this._data.updateSubject(this.id,item).subscribe(
            (data:any)=>{
            console.log(data);
            
              //alert('thai gayu');
              this._r.navigate(["/subject"]);
            }
          );
    
    
  }

  }


