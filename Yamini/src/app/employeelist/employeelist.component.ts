import { Component } from '@angular/core';
import { Employee } from 'src/app/employee.module';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

     employees: Employee[] = [
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

}
