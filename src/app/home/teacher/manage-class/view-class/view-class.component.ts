import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { classDataModel } from 'src/app/models/class.model';
import { ApiService } from 'src/app/services/api.service';
import { ClassSettingsComponent } from './class-settings/class-settings.component';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent implements OnInit {

  classData!: classDataModel;

  constructor(private apiService: ApiService, private route: Router, private activeRoute: ActivatedRoute, private dialog: MatDialog) {
    this.activeRoute.queryParams.subscribe(params => {
      this.apiService.getClassData(params.code).subscribe((data: any) => {
        console.log(data);
        this.classData = data[0];
        console.log(this.classData.students_enrolled);
      });
    });
  }

  ngOnInit(): void {
  }

  openClassSettings() {
    this.dialog.open(ClassSettingsComponent, { data: this.classData })
  }

}
