// import { Employee } from 'src/app/employee.model';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
