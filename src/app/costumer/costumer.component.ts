import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {
  deta:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.dialogpro().subscribe((data)=>{
      this.deta=data;



    });
  }

}
