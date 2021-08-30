import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { classDataModel } from 'src/app/models/class.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent implements OnInit {

  classData!: classDataModel;

  constructor(private apiService: ApiService, private route: Router, private activeRoute: ActivatedRoute) {
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

}
