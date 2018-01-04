import { Component, OnInit } from '@angular/core';
import { FacultyDataService} from '../faculty/faculty-data.service';
import { Faculty } from '../faculty/faculty-model';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit {
  id:number;
  fk_email_id:string;
  f_pass:string;
  faculty_name:string;
  f_address:string;
  f_m_no:string;
  f_qalification:string;
  f_experience:string;
  f_join_date:string;
  f_img:string;
  _Subscription:Subscription;
  constructor(public _r:Router,public _activerouter:ActivatedRoute,public _data:FacultyDataService) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
    (para:any)=>{
      this.id=para["f_id"];
      console.log(this.id);
      }
    );
    this._data.getFacultyById(this.id).subscribe(
      (data:Faculty[])=>{
       this.fk_email_id=data[0].f_email_id;
       this.f_pass=data[0].f_pass;
           this.faculty_name=data[0].faculty_name;
        this.f_address=data[0].f_address;
        this.f_m_no=data[0].f_m_no;
        this.f_qalification=data[0].f_qalification;
        this.f_experience=data[0].f_experience;
        this.f_join_date=data[0].f_join_date;
        this.f_img=data[0].f_img;
        console.log(data);
      }
    );

}


onupdate()
{
  
    let item=new Faculty(null,this.fk_email_id,this.f_pass,this.faculty_name,this.f_address,this.f_m_no,this.f_qalification,this.f_experience,this.f_join_date,this.f_img);
    this._data.updateFaculty(this.id,item).subscribe(
          (data:any)=>{
          console.log(data);
          
            //alert('thai gayu');
            this._r.navigate(["/faculty"]);
          }
        );
  
  
}


}
