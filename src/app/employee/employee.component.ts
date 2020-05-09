import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Leave } from '../Leave';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 
  

  logout(){
    this.router.navigate(['/login']);
  }
}
