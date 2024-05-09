import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { students } from '../../assets/data/students';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  students: Student[] = students;
  newStudent: Student = new Student(0, '', 0, '');
  student: Student | null = null;
  updatedStudent: Student = { id: 0, name: '', age: 0, department: '' };

  openUpdateModal(std: Student) {
    this.updatedStudent = { ...std };
  }

  addStudent() {
    const lastIndex = this.students.length - 1;
    const lastStudentId =
      this.students.length > 0 ? this.students[lastIndex].id : 0;
    this.newStudent = { ...this.newStudent, id: lastStudentId + 1 };
    this.students.push(this.newStudent);
    this.newStudent = new Student(0, '', 0, '');
  }

  show(std: Student) {
    if (this.student === std) {
      this.student = null;
    } else {
      this.student = std;
    }
  }

  update() {
    const index = this.students.findIndex(
      (std) => std.id === this.updatedStudent.id
    );
    this.students[index] = { ...this.updatedStudent };
    this.updatedStudent = new Student(0, '', 0, '');
  }

  delete(index: number) {
    this.students.splice(index, 1);
  }
}
