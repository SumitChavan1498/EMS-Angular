import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/employee";
import { AdminService } from "src/app/admin.service";
import { Router } from "@angular/router";
import { AdminComponent } from "../admin.component";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";
// import { BootstrapAlert, BootstrapAlertService } from 'ngx-bootstrap-alert';


@Component({
  selector: "app-show-employee",
  templateUrl: "./show-employee.component.html",
  styleUrls: ["./show-employee.component.css"],
})
export class ShowEmployeeComponent implements OnInit {
  empdata: Employee[];
  employee: Employee;
  employeeId;
  searchedEmployee: Employee;
  //p: number = 1
  p: number = 1;
  searchTerm: string;
  selected: any;
  //employees:  Employee[];
  // empList: Employee[];

  constructor(
    private admin: AdminService,
    private adminComp: AdminComponent,
    private router: Router,
    private toastr: ToastrService,
    // private bootstrapAlertService: BootstrapAlertService
  ) {}

  ngOnInit(): void {
    this.employee = new Employee();
    this.loadData();
    //this.employees = this.admin.GetEmployees();
  }

  // onClick(empId: number) {
  //   console.log("sffsdfdd");
  //   this.router.navigate(['/admin/show',empId]);
  // }

  loadData() {
    return this.admin.GetEmployees().subscribe((data: any) => {
      this.empdata = data;
    });
  }

  delete(a: Employee) {
    this.toastr.info("Successfully Deleted", "1 Record");
    return this.admin.delete(a.empId).subscribe((data: any) => {
      this.empdata = data;
    });
  }

  updateButtonClicked(a: Employee) {
    console.log(a);
    this.adminComp.employee = a;
    this.employee = a;
    this.router.navigate(["admin/update"]);
  }

  search() {
    this.admin.findById(this.employeeId).subscribe((data: any) => {
      this.searchedEmployee = data;
    });
    // console.log("searched employee = "+this.searchedEmployee);
    this.empdata = [];
    this.empdata.push(this.searchedEmployee);
  }
  deleteToastr() {
    // this.bootstrapAlertService.alert(new BootstrapAlert("BootstrapAlert Message!", "alert-success"));
  }

  // sortbyId() {
  //   this.empList.sort((a,b) =>
  //   a.empId > b.empId ? 1 : a.empId < b.empId ? -1 : 0 
  //   );
  //   return this.empList;
  // }
 
  // alert() {
  //   this.bootstrapAlertService.alert(new BootstrapAlert("BootstrapAlert Message!", "alert-success"));
  // }
 
}
