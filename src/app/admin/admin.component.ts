import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { templateJitUrl } from '@angular/compiler';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  empdata: Employee[];
  employee: Employee = new Employee();
  empId: number;
  employeeId:number;
  searchEmployee:Employee;

  constructor(private admin: AdminService,private router: Router) { }

  ngOnInit(): void {
    this.loadData();
    this.search(this.employeeId);
  }

  
  loadData() {
    return this.admin.GetEmployees().subscribe((data:any) =>
    {
      this.empdata = data;
    })
  } 

  add() {
    this.admin.addEmployee(this.employee).subscribe(data => {alert("Employee added successfully")});
    this.empdata.push(this.employee);
  }

  delete(a:Employee){
    
   
    return this.admin.delete(a.empId).subscribe((data:any) =>
    {
      this.empdata = data;
    })
    console.log("inside delete");
  }

 search(employeeId){
  //  console.log("idhr to aara hai");
  //  console.log("employee i ===="+this.employeeId);
    this.admin.findById(this.employeeId).subscribe((data:any) =>
    {
      this.searchEmployee = data;
    }) 
    
    // console.log(this.searchEmployee);
 }

  logout(){
    this.router.navigate(['/login']);
  }

}

