import { Component, OnInit } from '@angular/core';
import { LoginDataService } from './login-data.service';
import { Login } from './login-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin_email_id:string;
  pass:string;
  
  constructor(public _data:LoginDataService,public _r:Router) { }

  ngOnInit() {
  }
  onlogin()
  {
    let item=new Login(this.admin_email_id,this.pass);
    this._data.getlogin(item).subscribe(
          (data:any)=>{
           // console.log(data);
            
          if(data.length==1)
          {
          localStorage.setItem('Email',this.admin_email_id);
            this._r.navigate(["/home"]);
          }
          else{

            alert('something went wrong');
          }
            //this._r.navigate(["/newsfeed"]);
          }
        );
  }
}
