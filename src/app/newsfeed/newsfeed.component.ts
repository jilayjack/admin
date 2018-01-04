import { Component, OnInit } from '@angular/core';
import { News } from './newsfeed-model';
import { NewsfeedDataService } from './newsfeed-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
public newsfeed:News[]=[];
public newsfeed1:News[]=[];
public delarr:News[]=[];
constructor(public _data:NewsfeedDataService,public _r:Router) { }

  ngOnInit() {
    this._data.getAllnews().subscribe(
      (data:any)=>{
        this.newsfeed=data;
        this.newsfeed1=data;
    
      }
    );
  }

  search(item)
  {
    if(item!=''){
    this.newsfeed=this.newsfeed1.filter((x)=>x.news_title.indexOf(item)!==-1)
    }
    else{
      this.newsfeed=this.newsfeed1
    }
  }
onnewsDelete(item){

    this._data.deletenews(item.news_id).subscribe(
      (data:any)=>{
        this.newsfeed.splice(this.newsfeed.indexOf(item),1);
      }
    );
  }

  onupdatec(item)
  {
  //  console.log("asd");
    this._r.navigate(["/update-newsfeed",item.news_id]);
  }
  i:number=0;
  checkChange(item:News)
  {
    
      if(this.delarr.find(x=>x==item))
      {
        this.delarr.splice(this.delarr.indexOf(item),1);
      }
      else
      {
        this.delarr.push(item);
      }
      console.log(this.delarr);
    
  }
  deleteAll()
  {
    
    if(confirm("Are You Sure want to delete?"))
    {
    this._data.delteAllnews(this.delarr).subscribe(
      
        (data:any)=>{
          
          for(this.i=0 ; this.i<this.delarr.length ; this.i++)
          {
             

                this.newsfeed.splice(this.newsfeed.indexOf(this.delarr[this.i]),1);
                console.log("Complete");

              
          }
          this.delarr=[];
          
        },
        function(err){console.log(err);},
        function(){

        }
      
    );
  }
  }

  
}
