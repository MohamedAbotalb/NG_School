import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../models/department';
import { departments } from '../../assets/data/departments';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  departments: Department[] = departments;
  newDepartment: Department = new Department(0, '', '', '');
  department: Department | null = null;
  updatedDepartment: Department = { id: 0, name: '', head: '', location: '' };

  openUpdateModal(dept: Department) {
    this.updatedDepartment = { ...dept };
  }

  addDepartment() {
    const lastIndex = this.departments.length - 1;
    const lastDepartmentId =
      this.departments.length > 0 ? this.departments[lastIndex].id : 0;
    this.newDepartment = { ...this.newDepartment, id: lastDepartmentId + 1 };
    this.departments.push(this.newDepartment);
    this.newDepartment = new Department(0, '', '', '');
  }

  show(dept: Department) {
    if (this.department === dept) {
      this.department = null;
    } else {
      this.department = dept;
    }
  }

  update() {
    const index = this.departments.findIndex(
      (dept) => dept.id === this.updatedDepartment.id
    );
    this.departments[index] = { ...this.updatedDepartment };
    this.updatedDepartment = new Department(0, '', '', '');
  }

  delete(index: number) {
    this.departments.splice(index, 1);
  }
}
