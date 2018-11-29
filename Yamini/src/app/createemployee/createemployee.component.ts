import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  saveemployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
