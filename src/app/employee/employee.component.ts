import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: any[] = [];
  newEmployee: any = {};
  editingEmployee: any = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = {};
    });
  }

  editEmployee(employee: any): void {
    this.editingEmployee = { ...employee };
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.editingEmployee).subscribe(() => {
      this.loadEmployees();
      this.editingEmployee = {};
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
