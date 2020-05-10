import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AdminLogin } from '../AdminLogin';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Employee Maintenance System';
  loginlist: AdminLogin[];
  emploginlist: Employee[];
  employee: Employee = new Employee();
  id:string;
  pass:string;

  empFound = false;
  adminFound = false;
  constructor(private adminservice:AdminService,private router:Router,private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.loadAdminCredential();
    this.loadEmployeeCredential();
  }

  loadAdminCredential(){
    console.log("inside loadAdminCredential()");
    this.adminservice.getLogin().subscribe(data=>{this.loginlist=data})
  }
  
  
    loadEmployeeCredential(){
      this.employeeservice.login().subscribe(data=>{this.emploginlist=data})
  
    }

  adminLogin(){
    console.log("inside adminLogin()");
    console.log(this.loginlist);
    this.loginlist.forEach(cred => {
      if(cred.adminId==this.id){
        if(cred.adminPass==this.pass){
          this.adminFound = true;

          this.router.navigate(['/admin/show']);
        }
      }
    });
    if(!this.adminFound)
      alert("Enter valid Credential");
  }

  employeeLogin(){
    
    this.emploginlist.forEach(cred => {
      if(cred.empId==Number(this.id)){
        if(cred.empPass==this.pass){
          this.empFound = true;
          this.employeeservice.idAfterLoggedIn=cred.empId;
          this.employeeservice.managerIdafterLoggedIn=cred.managerId;
          this.router.navigate(['/employee/view']);
        }
      }
    });
    if(!this.empFound)
       alert("Enter valid Credential");
     
  }

 

}
