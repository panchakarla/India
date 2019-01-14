import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.module';
import { Employeeservice } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'] ,
  providers: [Employeeservice]
})
export class EmployeelistComponent implements OnInit {

     employees: Employee[];
     constructor(private _employeeService: Employeeservice) { }

  ngOnInit() {
    this.employees = this._employeeService.getemployees();
  }

}
