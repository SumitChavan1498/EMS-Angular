import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../employee';


@Pipe({
    name: 'employeefilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    
    transform(empdata: Employee[], searchTerm: string): Employee[] {
        if (!empdata || !searchTerm) {
            return empdata;
        }
        
            return empdata.filter(empdata =>
                empdata.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
       
           
    }
}



