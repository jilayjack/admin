import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty/faculty-model';
import { FacultyDataService } from '../faculty/faculty-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor(public _data:FacultyDataService,public _r:Router) { }
  f_email_id:string;
  f_pass:string;
  faculty_name:string;
  f_address:string;
  f_m_no:string;
  f_qalification:string;
  f_experience:string;
  f_join_date:string;
  f_img:string;
  ngOnInit() {
  }
  add()
{
  let item=new Faculty(null,this.f_email_id,this.f_pass,this.faculty_name,this.f_address,this.f_m_no,this.f_qalification,this.f_experience,this.f_join_date,this.f_img);
  this._data.addFaculty(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          //alert('thai gayu');
          this._r.navigate(["/faculty"]);
        }
      );

}

}
