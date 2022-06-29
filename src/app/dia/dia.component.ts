
import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../service/api.service';
import {HomeComponent} from '../home/home.component';
import { DataRowOutlet } from '@angular/cdk/table';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {

  countrydata:any;

  constructor(private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editt:any ) {

  }
  ngOnInit(): void {
    console.log(this.editt)
  }

  gatpro(row:any){
  this.api.getPro(this.editt)
  .subscribe
  ((data)=>this.countrydata = data);


}

}
