import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StudentComponent, DepartmentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'NG School';
}
