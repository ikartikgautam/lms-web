import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './home/student/student.component';
import { TeacherComponent } from './home/teacher/teacher.component';
import { GetUserDetailsComponent } from './auth/get-user-details/get-user-details.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClassComponent } from './home/teacher/create-class/create-class.component';
import { ManageClassComponent } from './home/teacher/manage-class/manage-class.component';
import { ViewClassComponent } from './home/teacher/manage-class/view-class/view-class.component';
import { StudentViewClassesComponent } from './home/student/student-view-classes/student-view-classes.component';
import { ClassSettingsComponent } from './home/teacher/manage-class/view-class/class-settings/class-settings.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ManageAssignmentsComponent } from './home/teacher/manage-assignments/manage-assignments.component';
import { CreateAssignmentComponent } from './home/teacher/manage-assignments/create-assignment/create-assignment.component';
import { ScheduleClassComponent } from './home/teacher/manage-class/view-class/schedule-class/schedule-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    StudentComponent,
    TeacherComponent,
    GetUserDetailsComponent,
    DashboardComponent,
    CreateClassComponent,
    ManageClassComponent,
    ViewClassComponent,
    StudentViewClassesComponent,
    ClassSettingsComponent,
    ManageAssignmentsComponent,
    CreateAssignmentComponent,
    ScheduleClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireStorageModule
  ],
  entryComponents: [
    ClassSettingsComponent,
    CreateAssignmentComponent,
    ScheduleClassComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
