import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { StudentListComponent } from './Components/student/student-list/student-list.component';
import { StudentAddComponent } from './Components/student/student-add/student-add.component';
import { StudentDetailsComponent } from './Components/student/student-details/student-details.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { StudentUpdateComponent } from './Components/student/student-update/student-update.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'students',
    component: StudentListComponent,
    children: [
      { path: 'add', component: StudentAddComponent },
      { path: 'details/:id', component: StudentDetailsComponent },
      { path: 'update/:id', component: StudentUpdateComponent },
    ],
  },
  { path: 'departments', component: DepartmentListComponent },
  { path: '**', component: NotfoundComponent },
];
