import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../Services/department.service';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css',
})
export class DepartmentAddComponent {
  departments!: Department[];
  newDepartment: Department = new Department(0, '', '', '');

  constructor(private departmentService: DepartmentService) {
    this.departments = departmentService.getAll();
  }

  add() {
    const lastIndex = this.departments.length - 1;
    const lastDepartmentId =
      this.departments.length > 0 ? this.departments[lastIndex].id : 0;
    this.newDepartment = { ...this.newDepartment, id: lastDepartmentId + 1 };
    this.departmentService.add(this.newDepartment);
    this.newDepartment = new Department(0, '', '', '');
  }
}
