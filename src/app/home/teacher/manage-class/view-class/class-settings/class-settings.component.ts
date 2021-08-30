import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { classDataModel } from 'src/app/models/class.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-class-settings',
  templateUrl: './class-settings.component.html',
  styleUrls: ['./class-settings.component.scss']
})
export class ClassSettingsComponent implements OnInit {

  classData!: classDataModel;
  studentsList: any[] = [];

  constructor(private apiService: ApiService, private matDialogRef: MatDialogRef<ClassSettingsComponent>, @Inject(MAT_DIALOG_DATA) public data: classDataModel) {
    this.classData = data;
    this.getAllStudents();
  }

  ngOnInit(): void {
  }

  getAllStudents() {
    this.studentsList = [];
    this.apiService.getAllStudents().subscribe((data: any) => {
      console.log(data);
      for (const e in data) {
        if (data[e].courses_enrolled.includes(this.classData._id)) {
          data[e].enrolled = true;
        } else {
          data[e].enrolled = false;
        }
        this.studentsList.push(data[e]);
      }
    })
  }

  addStudentInClass(student: any) {
    console.log(student)
    this.apiService.addStudentToClass(this.classData.code, student.email).subscribe(res => {
      console.log(res);
      this.getAllStudents();
    })
  }

}
