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
   
   age:number;
 
  
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
//&& (((this.employee.doj.getFullYear ) - 18) < this.employee.dob.getFullYear as any)
  update(a: Employee) {
  

    var timeDiff = Math.abs(new Date(this.employee.doj).getTime() - new Date(this.employee.dob).getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    //if((this.employee.dob > this.employee.doj) && (this.dat-18) > this.employee.dob.getFullYear()) 
    if(this.age<=18)
    {
      this.toastr.warning('Minimum Age should be 18','DOJ should be  greater than DOB')
    }
    else{
      this.admin.updateEmployee(this.employee, a.empId).subscribe((data: any) => {
        this.empdata = data;
        this.toastr.success('Updated Successfully','1 Record');
        console.log("greater than 18");
        this.router.navigate(['/admin/show']);    
    });
  }
    
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
