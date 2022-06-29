import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppComponent } from '../app.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {DiaComponent} from '../dia/dia.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  [id: number]: any;

  displayedColumns: string[] = ['DomainName','email','Mobile','Registrar', 'date1', 'ACTIVATION','Provider','Plan','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getAllProduct();

  }
  getAllProduct()
  {
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("error while fetching")
      }
    })
  }

  opendia(row:any){
    this.api.getPro(row)
    console.log(row)
    this.dialog.open(DiaComponent,{

      width:'50%',
      data: row




    })


  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editProduct(row: any)
  {
    this.dialog.open(DialogComponent,{
      width:'30%',
      data: row

    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllProduct();
      }
    })
  }
  deleteProduct(id:number){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert('Deleted');
        this.getAllProduct();
      },
      error:()=>{
        alert("error")
      }
    })
  }


}
