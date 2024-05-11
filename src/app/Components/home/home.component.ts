import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, StudentComponent, DepartmentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'NG School';
}
