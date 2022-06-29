import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private api:ApiService,private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  opendate(){
    this.dialog.open(DashboardComponent)
  }

}
