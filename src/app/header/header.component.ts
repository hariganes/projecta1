import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog : MatDialog ) { }

  openDialog(){
    this.dialog.open(DialogComponent,{
      width:'70%',
      height: '70%'



    });

  }
}
