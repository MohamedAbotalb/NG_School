import { Component } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../Services/department.service';
import { DepartmentAddComponent } from '../department-add/department-add.component';
import { DepartmentDetailsComponent } from '../department-details/department-details.component';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentUpdateComponent,
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent {
  departments!: Department[];
  department: Department | undefined;
  updatedDepartment!: Department;

  constructor(private DepartmentService: DepartmentService) {
    this.departments = DepartmentService.getAll();
  }

  showDetails(id: number) {
    const dept = this.DepartmentService.getById(id);
    this.department = this.department === dept ? undefined : dept;
  }

  openUpdateModal(dept: Department) {
    this.updatedDepartment = { ...dept };
  }

  delete(index: number) {
    this.DepartmentService.delete(index);
  }
}
