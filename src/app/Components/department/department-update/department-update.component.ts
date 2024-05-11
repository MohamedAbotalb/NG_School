import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../../models/department';
import { DepartmentService } from '../../../Services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css',
})
export class DepartmentUpdateComponent implements OnInit {
  departments!: Department[];
  @Input() selectedDepartment!: Department;

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departments = this.departmentService.getAll();
  }

  update() {
    const index = this.departments.findIndex(
      (dept) => dept.id === this.selectedDepartment.id
    );
    this.departmentService.update(index, this.selectedDepartment);
    this.selectedDepartment = new Department(0, '', '', '');
    this.router.navigateByUrl('departments');
  }
}
