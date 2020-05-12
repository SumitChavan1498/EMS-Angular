import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/employee";
import { AdminService } from "src/app/admin.service";
import { AdminComponent } from "../admin.component";
import { ToastrService } from "ngx-toastr";

import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {
  empdata: Employee[];
  employee: Employee;
  form: any[];
  EmployeeForm: FormGroup;
  
  
  constructor(
    private admin: AdminService,
    private adminComp: AdminComponent,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employee = new Employee();
    this.loadData();
  }

  update(a: Employee) {
    this.admin.updateEmployee(this.employee, a.empId).subscribe((data: any) => {
      this.empdata = data;
    });
    
    this.router.navigate(['/admin/show']);
  }

  loadData() {
    // console.log(this.adminComp.empIdforUpdate);
    // this.admin.findById(this.adminComp.empIdforUpdate).subscribe((data:any) =>
    // {
    //   this.empdata = data;
    // })
    // console.log(this.empdata);
    this.employee = this.adminComp.employee;
   
  }

  

  updateToastr() {
    this.toastr.success("Successfully Updated", "1 Record");
    
  }
}
