import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  empdata: Employee[];
  employee: Employee;
  employeeId;
  searchedEmployee:Employee;
  //p: number = 1

  constructor(private admin: AdminService,private adminComp: AdminComponent,private router: Router) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.loadData();
  }


  loadData() {
    return this.admin.GetEmployees().subscribe((data:any) =>
    {
      this.empdata = data;
    })
  }

  delete(a:Employee){
    return this.admin.delete(a.empId).subscribe((data:any) =>
    {
      this.empdata = data;
    })
  }

  updateButtonClicked(a:Employee){
    console.log(a);
    this.adminComp.employee = a;
    this.employee=a;
    this.router.navigate(['admin/update']);
  }

  search(){
    this.admin.findById(this.employeeId).subscribe((data:any) =>
    {
      this.searchedEmployee = data;
    })
    // console.log("searched employee = "+this.searchedEmployee);
    this.empdata=[];
    this.empdata.push(this.searchedEmployee);
  }

}
