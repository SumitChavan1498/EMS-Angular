import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { MainComponent } from 'src/app/login/main.component';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  empId : number;
  employee: Employee;
  constructor( private empservice: EmployeeService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    console.log(this.empservice.idAfterLoggedIn);
  //  console.log(this.empId);
    return this.empservice.getEmployee(this.empservice.idAfterLoggedIn).subscribe((data:any) =>
    {
      this.employee = data;
    })
  }


}
