import { Department } from './../Department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }
  ngOnInit() {
  }
  saveemployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
