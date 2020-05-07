import { Injectable } from '@angular/core';
import { Employee } from './employee'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 

  

  // localurl: string = './assets/employee.json';
  constructor(private http: HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  


  GetEmployees(): Observable<Employee> {
    return this.http.get<Employee>('http://localhost:1133/api/employee').pipe( retry(1), catchError(this.erroeHandl)
    )
  }

  delete(empId: number) {
    console.log(empId);
    return this.http.get<Employee>('http://localhost:1133/api/delete/'+empId);
  }

  addEmployee(employee) {
    return this.http.post<Employee>('http://localhost:1133/api/add/',employee);
  }
  
  updateEmployee(employee,empId:number) {
    return this.http.put<Employee>('http://localhost:1133/api/updateEmployee/'+empId,employee);

  }

  findById(empId:number){
    console.log("inside findbuid"+empId);
    return this.http.get<Employee>('http://localhost:1133/api/findById/'+empId);
  }


  erroeHandl(erroeHandl: any): import("rxjs").OperatorFunction<unknown, Employee> {
    throw new Error("Method not implemented.");
  }

}
