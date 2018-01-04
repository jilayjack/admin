import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
email_id=localStorage.getItem('Email');
  ngOnInit() {
    this.email_id=localStorage.getItem('Email');
   
  }

}
