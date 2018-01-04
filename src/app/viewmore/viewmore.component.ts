import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../dashboard/dashboard-data.service';
import { Student } from '../dashboard/dashboard-model';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-viewmore',
  templateUrl: './viewmore.component.html',
  styleUrls: ['./viewmore.component.css']
})
export class ViewmoreComponent implements OnInit {
  stu:Student[]=[];
id:number;
  fname:string='';
mname:string='';
lname:string='';
email:string='';
password:string='';
gender:string='';
adhar:number;
address:string='';
mno:number;
img:string='';
dob:Date;
qua:string='';
course:string='';
_Subscription:Subscription;
 

  constructor(public _data:DashboardDataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["v_id"];
        console.log(this.id);
        }
    );
    this._data.getstuById(this.id).subscribe(
      (data:Student[])=>{

        this.email=data[0].stu_email_id;
        this.password=data[0].pass;
        this.fname=data[0].f_name;
        this.mname=data[0].m_name;
        this.lname=data[0].l_name;
        this.gender=data[0].gen;
        
        this.adhar=data[0].adhar_no;
        this.address=data[0].address;

        this.mno=data[0].m_no;
        this.qua=data[0].qualification;
        this.img=data[0].img;
        this.dob=data[0].dob;
        //this.course=data[0].fk_course_id;
      
      }
    );
    }
   
  /*
    onupdate(item){
      this._r.navigate(["/update-student",item.stu_id]);
      
    }*/
       
  }
    
  


