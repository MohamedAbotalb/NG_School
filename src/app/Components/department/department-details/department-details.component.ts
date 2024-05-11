import { Component, Input } from '@angular/core';
import { Department } from '../../../../models/department';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css',
})
export class DepartmentDetailsComponent {
  @Input() department: Department | undefined;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
}
