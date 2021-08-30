import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-view-classes',
  templateUrl: './student-view-classes.component.html',
  styleUrls: ['./student-view-classes.component.scss']
})
export class StudentViewClassesComponent implements OnInit {

  classes: any = [];

  constructor(private apiService: ApiService, private userService: UserService) {
    this.fetchClassesData();
  }

  ngOnInit(): void {
  }


  fetchClassesData() {
    for (const e in this.userService.userData.courses_enrolled) {
      this.apiService.getSpecificClassData(this.userService.userData.courses_enrolled[e]).subscribe((rs: any) => {
        this.classes.push(rs[0]);
      })
    }
  }


}
