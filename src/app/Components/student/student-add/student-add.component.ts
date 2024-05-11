import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../models/student';
import { StudentService } from '../../../Services/student.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent implements OnInit {
  students!: Student[];
  newStudent: Student = new Student(0, '', 0, '');

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

  add() {
    const lastIndex = this.students.length - 1;
    const lastStudentId =
      this.students.length > 0 ? this.students[lastIndex].id : 0;
    this.newStudent = { ...this.newStudent, id: lastStudentId + 1 };
    this.studentService.add(this.newStudent);
    this.newStudent = new Student(0, '', 0, '');
    this.router.navigateByUrl('students');
  }
}
