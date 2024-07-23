import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyproductService {


  private baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any[]>(this.baseUrl);
  }

  createEmployee(employee: any) {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(employee: any) {
    const url = `${this.baseUrl}/${employee.id}`;
    return this.http.put(url, employee);
  }

  deleteEmployee(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
