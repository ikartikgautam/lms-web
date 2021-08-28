import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GetUserDetailsComponent } from './auth/get-user-details/get-user-details.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './home/student/student.component';
import { TeacherComponent } from './home/teacher/teacher.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'student', component: StudentComponent },
      { path: 'teacher', component: TeacherComponent }
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
