

import { Component, OnInit} from '@angular/core';
import { MyproductService } from '../myproduct.service';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.scss']
})
export class MyproductComponent implements OnInit {



  employees: any[] = [];
  newEmployee: any = {};
  editingEmployee: any = {};

  constructor(private myproductService: MyproductService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.myproductService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.myproductService.createEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = {};
    });
  }

  editEmployee(employee: any): void {
    this.editingEmployee = { ...employee };
  }

  updateEmployee(): void {
    this.myproductService.updateEmployee(this.editingEmployee).subscribe(() => {
      this.loadEmployees();
      this.editingEmployee = {};
    });
  }

  deleteEmployee(id: number): void {
    this.myproductService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}