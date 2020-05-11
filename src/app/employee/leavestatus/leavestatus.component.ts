import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Leave';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {
  p: number = 1;
  leaveData: Leave[];
  myLeaves:Leave[];
  constructor(private employee: EmployeeService) { }

  ngOnInit(): void {

    this.employee.getLeaveByEmpId().subscribe((data:any) =>
    {
      this.myLeaves = data;
    })

  }
  leaveStatus() {

    // return this.employee.getLeaveByManagerId().subscribe((data:any) =>
    // {
    //   this.leaveData = data;
    // })

    return this.employee.getPendingLeaves(this.employee.idAfterLoggedIn).subscribe((data:any) =>
    {
      this.leaveData = data;
    })


  }

  approved(leave:Leave){
    leave.status = "Approved";
    this.employee.updateLeave(leave).subscribe((data:any) =>{});
  }

  reject(leave){
    leave.status = "Rejected";
    this.employee.updateLeave(leave).subscribe((data:any) =>{});
  }


}
