import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Leave';
import { EmployeeService } from 'src/app/employee.service';
import { MainComponent } from 'src/app/login/main.component';
import { AddEmployeeComponent } from 'src/app/admin/add-employee/add-employee.component';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent implements OnInit {
  id: number;
  leaveData: Leave[];
  leave: Leave = new Leave();
  emp: Employee = new Employee();


  constructor(private employee: EmployeeService) { }

  ngOnInit(): void {
    this.leaveStatus();
    this.loadData();
    this.leave.empId = this.employee.idAfterLoggedIn;
   // this.leave.managerId = this.emp.managerId;
  }

  applyForLeave() {
    console.log("leave func");
    console.log(this.leaveData);
    this.employee.applyLeave(this.leave).subscribe(data => {alert("Applied for Leave")});
    this.leaveData.push(this.leave);
    this.leave.status="Applied";
    
  }

  leaveStatus() {
  // if(this.emp.managerId==this.emp.managerId){
    return this.employee.retrieveStatus().subscribe((data:any) =>
    {
      this.leaveData = data;
    })
 //}
  }

  updateStatus(l:Leave) {
      if(l.status=="Approved") {
        l.balance -= l.numberOfDays;
        l.utilized += l.numberOfDays;
      }

    return this.employee.updateDetails(this.leave,l.empId).subscribe((data:any) =>
    { 
      this.leaveData = data;
    })
   
  }

  loadData() {
    console.log(this.employee.idAfterLoggedIn);
    console.log("inside load data")
  //  console.log(this.empId);
    return this.employee.getEmployee(this.employee.idAfterLoggedIn).subscribe((data:any) =>
    {
      this.emp = data;
      console.log(this.emp.managerId);
      this.leave.managerId = this.emp.managerId;
    })
  }

 }
