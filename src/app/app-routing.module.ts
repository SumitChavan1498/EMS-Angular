import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './login/main.component';
import { UpdateComponent } from './admin/updateEmployee/update.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { ShowEmployeeComponent } from './admin/show-employee/show-employee.component';
import { SearchEmployeeComponent } from './admin/search-employee/search-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { ApplyForLeaveComponent } from './employee/apply-for-leave/apply-for-leave.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
  
  {path:'admin',component:AdminComponent,
  children: [
    {path: 'update',component:UpdateComponent},
    {path: 'show',component:ShowEmployeeComponent},
    {path: 'add' ,component:AddEmployeeComponent},
    {path: 'search',component:SearchEmployeeComponent} 
  ]
},

  {path:'employee',component:EmployeeComponent,
  children: [
    {path: 'view',component:ViewEmployeeComponent},
    {path: 'leave',component:ApplyForLeaveComponent}
  ]
},
  {path:'login',component:MainComponent},
  
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
