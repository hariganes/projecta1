import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerComponent } from './costumer/costumer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiaComponent } from './dia/dia.component';
import { HomeComponent } from './home/home.component';
import { MailComponent } from './mail/mail.component';
import { MainpgComponent } from './mainpg/mainpg.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo: 'home' ,pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'home/main/mail',component:MailComponent},
  {path:'costumer', component:CostumerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
