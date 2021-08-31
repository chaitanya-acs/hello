import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {

  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.employee=this.service.getEmployee(2);
  }


  employee:Employee;

  updated() {
   //   this.service.updateEmployee(this.employee);
    }
}
