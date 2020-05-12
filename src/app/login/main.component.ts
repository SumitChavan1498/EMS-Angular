import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AdminLogin } from '../AdminLogin';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';


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
  eyeicon:string;

  empFound = false;
  adminFound = false;

  show: boolean;


  constructor(private adminservice:AdminService,private router:Router,private employeeservice: EmployeeService, private toastr:ToastrService) {
    this.show = false;
    this.eyeicon = "fa-eye-slash";
   }

  ngOnInit(): void {
    this.loadAdminCredential();
    this.loadEmployeeCredential();
  }

  password() {

    this.show = !this.show;
    if(this.show)
    this.eyeicon = "fa-eye";
    else
    this.eyeicon = "fa-eye-slash";
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
          this.toastr.success('Logged in as Admin','Successfully',{positionClass: 'toast-bottom-right'});
          this.router.navigate(['/admin/show']);
        }
      }
    });
    if(!this.adminFound)
      // alert("Enter valid Credential");
      this.toastr.error('Please Enter Valid Credential Ones','Invalid Credentials!',{positionClass: 'toast-bottom-right'});
        
  }

  employeeLogin(){
    
    this.emploginlist.forEach(cred => {
      if(cred.empId==Number(this.id)){
        if(cred.empPass==this.pass){
          this.empFound = true;
          this.employeeservice.idAfterLoggedIn=cred.empId;
          this.employeeservice.managerIdafterLoggedIn=cred.managerId;
          this.toastr.success('Logged in as Employee','Successfully',{positionClass: 'toast-bottom-right'});
          this.router.navigate(['/employee/view']);
        }
      }
    });
    if(!this.empFound)
      //  alert("Enter valid Credential");
      this.toastr.error('Please Enter Valid Ones','Invalid Credentials!',{positionClass: 'toast-bottom-right'});
  }

 

}
