import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './login/main.component';
import { FormsModule } from '@angular/forms';

import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { UpdateComponent } from './admin/updateEmployee/update.component';
import { ShowEmployeeComponent } from './admin/show-employee/show-employee.component';
import { SearchEmployeeComponent } from './admin/search-employee/search-employee.component';


import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { ApplyForLeaveComponent } from './employee/apply-for-leave/apply-for-leave.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    MainComponent,
    AddEmployeeComponent,
    UpdateComponent,
    ShowEmployeeComponent,
    SearchEmployeeComponent,
    ViewEmployeeComponent,
    ApplyForLeaveComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   // NgxPaginationModule,
    FormsModule,
    NgbModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
