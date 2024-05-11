import { Component } from '@angular/core';
import { DepartmentListComponent } from './department-list/department-list.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DepartmentListComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {}
