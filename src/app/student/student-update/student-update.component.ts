import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css',
})
export class StudentUpdateComponent {
  students!: Student[];
  @Input() selectedStudent!: Student;

  constructor(private studentService: StudentService) {
    this.students = studentService.getAll();
  }

  update() {
    const index = this.students.findIndex(
      (std) => std.id === this.selectedStudent.id
    );
    this.studentService.update(index, this.selectedStudent);
    this.selectedStudent = new Student(0, '', 0, '');
  }
}
