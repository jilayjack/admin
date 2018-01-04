import { Component, OnInit } from '@angular/core';
import { Student } from '../home/student-model';
import { StudentDataService } from '../home/student-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
fname:string='';
lname:string='';
email:string='';
password:string='';
gender:string='';
dob:Date;
mno:number;
qua:number;
img:string='';
address:string='';
flag:number=0;

  constructor(public _data:StudentDataService,public _r:Router) { }

  ngOnInit() {
  }
add()
{
  let item=new Student(null,this.email,this.password,this.fname,null,this.lname,this.gender,null,this.address,this.mno,this.qua,this.img,this.dob,this.flag,2);
  this._data.addStudent(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          alert('thai gayu');
          //this._r.navigate(["/newsfeed"]);
        }
      );

}
}
