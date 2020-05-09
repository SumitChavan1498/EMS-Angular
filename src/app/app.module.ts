import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from './login/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { UpdateComponent } from './admin/updateEmployee/update.component';
import { ShowEmployeeComponent } from './admin/show-employee/show-employee.component';
import { SearchEmployeeComponent } from './admin/search-employee/search-employee.component';


import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { ApplyForLeaveComponent } from './employee/apply-for-leave/apply-for-leave.component';
import { DeleteAllEmployeeComponent } from './admin/delete-all-employee/delete-all-employee.component'; 
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { EmployeeService } from './employee.service';
import { LeavestatusComponent } from './employee/leavestatus/leavestatus.component';
import { ErrorComponent } from './error/error.component';


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
    ApplyForLeaveComponent,
    DeleteAllEmployeeComponent,
    LeavestatusComponent,
    ErrorComponent
   
    
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
 
  ],
  providers: [AdminService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
