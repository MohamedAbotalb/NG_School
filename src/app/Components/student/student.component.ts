import { Component } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentListComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {}
