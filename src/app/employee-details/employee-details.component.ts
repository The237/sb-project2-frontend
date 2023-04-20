import { EmployeeService } from './../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';


@Component({
    selector:'employee-details',
    templateUrl:'./employee-details.component.html',
    styleUrls:['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{

    id!:number
    employee = new Employee();
    constructor(private route:ActivatedRoute, private employeeService:EmployeeService){

    }
    ngOnInit(): void{
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployeeById(this.id).subscribe(data =>{
            this.employee = data;
        }); 
    }
}