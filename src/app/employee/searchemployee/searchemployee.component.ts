import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {
  selected: any;
  searchTerm: string;
  empdata:Employee[];
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    return this.admin.GetEmployees().subscribe((data: any) => {
      this.empdata = data;
    });
  }

}
