import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { AdminService } from 'src/app/admin.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-delete-all-employee',
  templateUrl: './delete-all-employee.component.html',
  styleUrls: ['./delete-all-employee.component.css']
})
export class DeleteAllEmployeeComponent implements OnInit {

  empdata: Employee[];

  constructor(private admin: AdminService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  deleteAllEmployee(){

   
    return this.admin.deleteAll().subscribe((data:any) =>
    {
      this.empdata = data;
      this.router.navigate(['/admin/show']);
    
    })
}

deletetoastr(){
  this.toastr.info('Successfully Deleted!!','All Records');

}



}