import { Injectable } from '@angular/core';
import { students } from '../../assets/data/students';
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = students;
  constructor() {}

  getAll(): Student[] {
    return this.students;
  }

  getById(id: number): Student | undefined {
    return this.students.find((std) => std.id === id);
  }

  add(std: Student): void {
    this.students.push(std);
  }

  update(index: number, std: Student): void {
    this.students[index] = { ...std };
  }

  delete(index: number): void {
    this.students.splice(index, 1);
  }
}
