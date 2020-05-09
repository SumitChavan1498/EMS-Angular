import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/Leave';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {
  
  leaveData: Leave[];
  constructor(private employee: EmployeeService) { }

  ngOnInit(): void {
  }
  leaveStatus() {
    return this.employee.retrieveStatus().subscribe((data:any) =>
    {
      this.leaveData = data;
    })
  }

}
