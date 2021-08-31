import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GetUserDetailsComponent } from './auth/get-user-details/get-user-details.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentViewClassesComponent } from './home/student/student-view-classes/student-view-classes.component';
import { StudentComponent } from './home/student/student.component';
import { CreateClassComponent } from './home/teacher/create-class/create-class.component';
import { ManageAssignmentsComponent } from './home/teacher/manage-assignments/manage-assignments.component';
import { ManageClassComponent } from './home/teacher/manage-class/manage-class.component';
import { ViewClassComponent } from './home/teacher/manage-class/view-class/view-class.component';
import { TeacherComponent } from './home/teacher/teacher.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      // { path: '', component: DashboardComponent },
      { path: 'student', component: StudentComponent },
      { path: 'teacher', component: TeacherComponent },
      // Teacher routes
      { path: 'createclass', component: CreateClassComponent },
      { path: 'manageclass', component: ManageClassComponent },
      { path: 'manageAssignments', component: ManageAssignmentsComponent },
      { path: 'viewClass', component: ViewClassComponent },
      // student routes
      { path: 'student-view-classes', component: StudentViewClassesComponent },
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: 'auth/createProfile', component: GetUserDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
