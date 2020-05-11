import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/employee";
import { AdminService } from "src/app/admin.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { AdminComponent } from "../admin.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"],
})
export class AddEmployeeComponent implements OnInit {
  empdata: any[];
  employee: Employee = new Employee();
  form: any[];
  EmployeeForm: FormGroup;
  curDate: Date;
  constructor(
    private admin: AdminService,
    private router: Router,
    private adminComp: AdminComponent,
    private toastr: ToastrService
  ) {
    this.curDate = new Date();
  }

  ngOnInit(): void {
    // this.EmployeeForm = new FormGroup({
    //   fname: new FormControl()
    // });
    '<h1>Hello</h1>';
  }

  add() {
   
    this.admin.addEmployee(this.employee).subscribe((data) => {
      this.toastr.success('Successfully Added','Record');
    });
    this.empdata.push(this.employee);
  
  }

  // addToastr(){
  //   this.toastr.success('Successfully Added','Record');
  //   this.router.navigate(['/admin/show']);
    
  // }

  
}
