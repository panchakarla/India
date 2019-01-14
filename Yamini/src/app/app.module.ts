import { Employeeservice } from './employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';

const appRoutes: Routes = [
  { path: 'list', component: EmployeelistComponent },
  { path: 'create', component: CreateemployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [Employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
