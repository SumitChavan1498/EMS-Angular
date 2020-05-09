import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-delete-all-employee',
  templateUrl: './delete-all-employee.component.html',
  styleUrls: ['./delete-all-employee.component.css']
})
export class DeleteAllEmployeeComponent implements OnInit {

  empdata: Employee[];

  constructor(private admin: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  deleteAllEmployee(){
    return this.admin.deleteAll().subscribe((data:any) =>
    {
      this.empdata = data;
      this.router.navigate(['/admin/show']);
    
    })
    

}
}