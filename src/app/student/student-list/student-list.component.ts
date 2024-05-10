import { Component } from '@angular/core';
import { Student } from '../../../models/student';
import { StudentService } from '../../Services/student.service';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentUpdateComponent } from '../student-update/student-update.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    StudentAddComponent,
    StudentDetailsComponent,
    StudentUpdateComponent,
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  students!: Student[];
  student: Student | undefined;
  updatedStudent!: Student;
  deleteStudentIndex: number = -1;

  constructor(private studentService: StudentService) {
    this.students = studentService.getAll();
  }

  showDetails(id: number) {
    const std = this.studentService.getById(id);
    this.student = this.student === std ? undefined : std;
  }

  openUpdateModal(std: Student) {
    this.updatedStudent = { ...std };
  }

  delete(index: number) {
    this.studentService.delete(index);
  }
}
