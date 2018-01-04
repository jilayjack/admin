import { Component, OnInit } from '@angular/core';
import { News } from '../newsfeed/newsfeed-model';
import { NewsfeedDataService } from '../newsfeed/newsfeed-data.service';
import { Router } from '@angular/router';
//import { NewsfeedComponent } from '../newsfeed/newsfeed.component';
@Component({
  selector: 'app-add-newsfeed',
  templateUrl: './add-newsfeed.component.html',
  styleUrls: ['./add-newsfeed.component.css']
})
export class AddNewsfeedComponent implements OnInit {
//model={news_id:'',news_title:'',new_desc:'',news_img:''};

id:number;
title:string;
desc:string;
img:string;
  constructor(public _data:NewsfeedDataService,public _r:Router) { }

  ngOnInit() {
  }
add()
{
let item=new News(this.id,this.title,this.desc,this.img);
      this._data.addnews(item).subscribe(
        (data:any)=>{
        console.log(data);
        
          alert('thai gayu');
          //this._r.navigate(["/newsfeed"]);
        }
      );

}
}
