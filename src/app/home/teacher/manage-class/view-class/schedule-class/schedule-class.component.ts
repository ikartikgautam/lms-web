import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { classDataModel, scheduleClassModel } from 'src/app/models/class.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-schedule-class',
  templateUrl: './schedule-class.component.html',
  styleUrls: ['./schedule-class.component.scss']
})
export class ScheduleClassComponent implements OnInit {

  classDet = new FormGroup({
    topic: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
    date: new FormControl(''),
    class: new FormControl(''),
  });

  classData: classDataModel;
  classes: any[] = [];

  constructor(private apiService: ApiService, private matDialogRef: MatDialogRef<ScheduleClassComponent>, @Inject(MAT_DIALOG_DATA) public data: classDataModel) {
    this.classData = data;
  }

  ngOnInit(): void {
  }

  submit() {
    let det = this.classDet.value;
    let obj = new scheduleClassModel();
    obj.title = det.topic;
    obj.start_time = det.start;
    obj.end_time = det.end;
    obj.date = det.date;
    this.apiService.scheduleClass(this.classData.code, obj).subscribe((res: any) => {
      console.log(res)
    })
  }

}
