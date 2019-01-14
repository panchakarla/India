import { Employee } from './employee.module';
import { Injectable } from '@angular/core';

@Injectable()

export class Employeeservice {
    private employeelist: Employee[] = [
        {
            Name: 'Yamini',
            Gender: 'Female',
            Age: 25,
            complexion: 'white',
            phonenumber: 100,
            Image: 'assets/Yamini.jpg'
        },
        {
              Name: 'Sudhakar',
              Gender: 'male',
              Age: 30,
              complexion: 'Black',
              phonenumber: 108,
              Image: 'assets/Neredu.jpg'
        },
    ];
    getemployees(): Employee[] {
        return this.employeelist;
    }
    save(employee: Employee) {
        this.employeelist.push(employee);
    }

}
