import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../../../models/student';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css',
})
export class StudentUpdateComponent implements OnInit {
  students!: Student[];
  @Input() selectedStudent!: Student;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

  update() {
    const index = this.students.findIndex(
      (std) => std.id === this.selectedStudent.id
    );
    this.studentService.update(index, this.selectedStudent);
    this.selectedStudent = new Student(0, '', 0, '');
    this.router.navigateByUrl('students');
  }
}
