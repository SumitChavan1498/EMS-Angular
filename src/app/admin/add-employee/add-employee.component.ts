import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
import { AdminComponent } from '../admin.component';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empdata: any[];
  employee: Employee = new Employee();

  EmployeeForm: FormGroup;

  constructor(private admin: AdminService,private router: Router, private adminComp: AdminComponent) { }

  ngOnInit(): void {
    this.EmployeeForm = new FormGroup({
      fname: new FormControl()
    });
  }

  add() {
    this.admin.addEmployee(this.employee).subscribe(data => {alert("Employee added successfully")});
    this.empdata.push(this.employee);
   
  } 


  

}
