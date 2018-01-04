import { Component, OnInit } from '@angular/core';
import { NewsfeedDataService } from '../newsfeed/newsfeed-data.service';
import { News } from '../newsfeed/newsfeed-model';
import { Router,ActivatedRoute } from '@angular/router';
import{ Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-update-newsfeed',
  templateUrl: './update-newsfeed.component.html',
  styleUrls: ['./update-newsfeed.component.css']
})
export class UpdateNewsfeedComponent implements OnInit {
  id:number;
  title:string;
  desc:string;
  img:string;
  _Subscription:Subscription;
 
  constructor(public _data:NewsfeedDataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._Subscription=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["n_id"];
        }
    );
    this._data.getNewsById(this.id).subscribe(
      (data:News[])=>{
        this.title=data[0].news_title;
        this.desc=data[0].new_desc;
        //this.img=data[0].news_img;
        
      }
    );
  }
  onupdate()
  {
    
      let item=new News(null,this.title,this.desc,this.img);
      this._data.updatenews(this.id,item).subscribe(
            (data:any)=>{
            //console.log(data);
            
              //alert('thai gayu');
              this._r.navigate(["/newsfeed"]);
            }
          );
    
    
  }

  }


