import { Injectable } from '@angular/core';
import { departments } from '../../assets/data/departments';
import { Department } from '../../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departments: Department[] = departments;
  constructor() {}

  getAll(): Department[] {
    return this.departments;
  }

  getById(id: number): Department | undefined {
    return this.departments.find((dept) => dept.id === id);
  }

  add(dept: Department): void {
    this.departments.push(dept);
  }

  update(index: number, dept: Department): void {
    this.departments[index] = { ...dept };
  }

  delete(index: number): void {
    this.departments.splice(index, 1);
  }
}
