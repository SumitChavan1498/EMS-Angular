import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../employee';


@Pipe({
    name: 'empfilter'
})
export class EmpFilterPipe implements PipeTransform {
    
    transform(empdata: Employee[], searchTerm: string, selected: string ): Employee[] {
        if (!empdata || !searchTerm || !selected) {
            return empdata;
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
            empdata.grade.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        }
        // else if(selected=="Last Name") {
        //   return empdata.filter(empdata =>
        //     empdata.department.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        // }


            
       
           
    }
}




