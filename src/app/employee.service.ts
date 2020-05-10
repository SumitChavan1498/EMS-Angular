import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Leave } from './Leave';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  idAfterLoggedIn : any;
  managerIdafterLoggedIn:any;

  constructor(private http: HttpClient) { } 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(){
    
    return this.http.get<Employee[]>('http://localhost:1133/api/employee');

  }

  getEmployee(empId) {
    return this.http.get<Employee>('http://localhost:1133/api/findById/'+empId);
  } 

  applyLeave(leave) {
    console.log("Inside applyleave");
    return this.http.post<Leave[]>('http://localhost:8008/api/apply/',leave);
    
  }

  retrieveStatus() {
    return this.http.get<Leave[]>('http://localhost:8008/api/status/');
  }

  updateDetails(empId,leave) {
    return this.http.put<Leave[]>('http://localhost:8008/api/response/'+empId,leave);
  }

  getLeaveByManagerId(){
    return this.http.get<Leave[]>('http://localhost:8008/api/getLeave/'+this.idAfterLoggedIn);
  }

  getPendingLeaves(id){
    return this.http.get<Leave[]>('http://localhost:8008/api/getPendingLeaves/'+id);
  }

  getLeaveByEmpId(){
    return this.http.get<Leave[]>('http://localhost:8008/api/getMyLeaves/'+this.idAfterLoggedIn);
  }

  updateLeave(leave:Leave){
    return this.http.put<Leave>('http://localhost:8008/api/response/'+leave.empId,leave);
  }

}
