import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { HomeComponent } from '../home/home.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
deta:any;
newdt:any;
  constructor(private api:ApiService) { }
  mydate = new Date();


  ngOnInit(): void {

    this.api.dialogpro().subscribe((data)=>{
      this.deta=data;



    });

   if (formatDate(this.deta.date1,'yyyy-MM-dd','en_US') > formatDate(this.mydate,'yyyy-MM-dd','en_US'))
   {
    console.log('greater');
   }
   else{
    console.log('less');
   }
  }


}

