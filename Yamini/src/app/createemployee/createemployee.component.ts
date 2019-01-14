import { Employee } from './../employee.module';
import { Department } from './../Department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employeeservice} from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  departments: Department[] = [
    {id: 1, name: 'IT HELP Desk'},
    {id: 2, name: 'Team Lead'},
    {id: 3, name: 'Developer'}
  ];

  constructor( private _employeeService: Employeeservice,
               private _router: Router) { }
  ngOnInit() {
  }
  saveemployee(): void {
    // this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
