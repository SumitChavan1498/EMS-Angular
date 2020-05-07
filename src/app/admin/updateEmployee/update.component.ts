import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { AdminService } from 'src/app/admin.service';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  empdata: Employee[];
  employee: Employee;


  
  constructor(private admin:AdminService,private adminComp: AdminComponent) { }

  ngOnInit(){
    this.employee = new Employee();
    this.loadData();
  }

  update(a:Employee) {
    this.admin.updateEmployee(this.employee,a.empId).subscribe((data:any) =>
    {
      this.empdata = data;
    })
  }

  loadData(){

    // console.log(this.adminComp.empIdforUpdate);
    // this.admin.findById(this.adminComp.empIdforUpdate).subscribe((data:any) =>
    // {
    //   this.empdata = data;
    // })
    // console.log(this.empdata);
    this.employee = this.adminComp.employee;
    
  }

}
