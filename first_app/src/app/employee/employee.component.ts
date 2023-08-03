import { Component, Input } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() emp1:Employee;
  submitted:boolean;
  constructor()
  {
    this.emp1=new Employee();
    this.submitted=false
  }
  getData(){
    this.submitted=true;
  }
}
