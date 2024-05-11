import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../models/student';
import { StudentService } from '../../../Services/student.service';
import { StudentAddComponent } from '../student-add/student-add.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { Router } from '@angular/router';

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
export class StudentListComponent implements OnInit {
  students!: Student[];
  student: Student | undefined;
  updatedStudent!: Student;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

  goToAdd(): void {
    this.router.navigateByUrl('students/add');
  }

  showDetails(id: number): void {
    const std = this.studentService.getById(id);
    if (this.student === std) {
      this.student = undefined;
      this.router.navigateByUrl('students');
    } else {
      this.student = std;
      this.router.navigateByUrl(`students/details/${this.student?.id}`);
    }
  }

  openUpdateModal(std: Student): void {
    this.updatedStudent = { ...std };
    this.router.navigateByUrl(`students/update/${std.id}`);
  }

  delete(index: number): void {
    this.studentService.delete(index);
  }
}
