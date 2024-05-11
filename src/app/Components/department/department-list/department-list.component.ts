import { Component, OnInit } from '@angular/core';
import { Department } from '../../../../models/department';
import { DepartmentService } from '../../../Services/department.service';
import { DepartmentAddComponent } from '../department-add/department-add.component';
import { DepartmentDetailsComponent } from '../department-details/department-details.component';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';
import { Router } from '@angular/router';

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
export class DepartmentListComponent implements OnInit {
  departments!: Department[];
  department: Department | undefined;
  updatedDepartment!: Department;

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departments = this.departmentService.getAll();
  }

  goToAdd(): void {
    this.router.navigateByUrl('departments/add');
  }

  showDetails(id: number): void {
    const std = this.departmentService.getById(id);
    if (this.department === std) {
      this.department = undefined;
      this.router.navigateByUrl('departments');
    } else {
      this.department = std;
      this.router.navigateByUrl(`departments/details/${this.department?.id}`);
    }
  }

  openUpdateModal(dept: Department): void {
    this.updatedDepartment = { ...dept };
    this.router.navigateByUrl(`departments/update/${dept.id}`);
  }

  delete(index: number): void {
    this.departmentService.delete(index);
  }
}
