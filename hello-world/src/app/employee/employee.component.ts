import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employees: any = [];

  constructor(private _employeeService: EmployeeService) {}

  public errorMsg: any;
  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error)
    );
  }
}
