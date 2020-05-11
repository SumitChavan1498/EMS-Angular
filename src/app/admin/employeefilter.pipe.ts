import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../employee';


@Pipe({
    name: 'employeefilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    
    transform(empdata: Employee[], searchTerm: string, selected: string): Employee[] {
        if (!empdata || !searchTerm) {
            return empdata;
        }
            else if(selected=="Employee Id") {
              return empdata.filter(empdata =>
                  String(empdata.empId).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            }
             else if( selected=="First Name") {
                return empdata.filter(empdata =>
                  empdata.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
              }
              else if(selected=="Last Name") {
                return empdata.filter(empdata =>
                  empdata.lname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
              }
              else if(selected=="Department") {
                return empdata.filter(empdata =>
                  empdata.department.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
              }
              else if(selected=="Grade") {
                return empdata.filter(empdata =>
                    String(empdata.grade).toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
              }

           
    }
}



