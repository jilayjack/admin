import { Component, OnInit } from '@angular/core';
import { GallaryDataService  } from './gallary-data.service';
import { Gallary } from './gallary-model';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
public gallary:Gallary[]=[];
public delarr:Gallary[]=[];
constructor(public _data:GallaryDataService) { }

  ngOnInit() {
    this._data.getAllimg().subscribe(
      (data:any)=>{
        this.gallary=data;
      }
    );
  }
  onimgDelete(item){

    this._data.deleteimg(item.pic_id).subscribe(
      (data:any)=>{
        this.gallary.splice(this.gallary.indexOf(item),1);
      }
    );
  }


  i:number=0;
  checkChange(item:Gallary)
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
    this._data.delteAllImages(this.delarr).subscribe(
      
        (data:any)=>{
          
          for(this.i=0 ; this.i<this.delarr.length ; this.i++)
          {
             

                this.gallary.splice(this.gallary.indexOf(this.delarr[this.i]),1);
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
