import { Component, Input } from '@angular/core';
import { Department } from '../../../models/department';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css',
})
export class DepartmentDetailsComponent {
  @Input() department: Department | undefined;
}
