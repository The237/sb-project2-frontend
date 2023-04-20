import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) {
  }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee:Employee ): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
<<<<<<< HEAD
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    console.log(`${this.baseURL}/${id}`);
=======
    console.log(`${this.baseURL}/${id}`);
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
>>>>>>> 05-updateEmployee
  }

  updateEmployee(id:number, employee:Employee){
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }
}
