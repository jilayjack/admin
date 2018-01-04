import { Component, OnInit } from '@angular/core';
import { Student } from '../dashboard/dashboard-model';
import { DashboardDataService } from '../dashboard/dashboard-data.service';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id:number;
  _Subscription:Subscription;
  f_name:string='';
  m_name:string='';
  l_name:string='';
  stu_email_id:string='';
  pass:string='';
  gen:string='';
  dob:Date;
  m_no:number;
  qualification:string;
  img:string='';
  address:string='';
  adhar_no:number;
  //flag:string='active';
  fk_course_id:number;
  constructor(public _data:DashboardDataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["s_id"];
        }
    );
    this._data.getstuById(this.id).subscribe(
      (data:Student[])=>{
        this.f_name=data[0].f_name;
        this.m_name=data[0].m_name;
        this.l_name=data[0].l_name;
        this.stu_email_id=data[0].stu_email_id;
        this.pass=data[0].pass;
        this.gen=data[0].gen;
        this.dob=data[0].dob;
        this.m_no=data[0].m_no;
        this.qualification=data[0].qualification;
        this.img=data[0].img;
        this.address=data[0].address;
        this.fk_course_id=data[0].fk_course_id;
        
      }
    );
  }
  onupdate()
  {
    
      let item=new Student(null,this.stu_email_id,this.pass,this.f_name,this.m_name,this.l_name,this.gen,this.adhar_no,this.address,this.m_no,this.qualification,this.img,this.dob,1,this.fk_course_id);
      this._data.updatestudent(this.id,item).subscribe(
            (data:any)=>{
            console.log(data);
            
              //alert('thai gayu');
              this._r.navigate(["/dashboard"]);
            }
          );
    
    
  }
}
