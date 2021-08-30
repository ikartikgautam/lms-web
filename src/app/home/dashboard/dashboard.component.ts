import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  calEvents = [{ title: 'Assignment 1 submission' }, { title: 'Assignment 2 submission' }]
  @Input() type!: string;
  classes: any[] = [];

  constructor(private apiService: ApiService, private userService: UserService) {
  }

  ngOnInit(): void {
    // console.log(this.type);
    if (this.type == 'student') {
      let fetch = setInterval(() => {
        if (this.userService.userData._id) {
          this.fetchClassesData();
          clearInterval(fetch)
        }
      }, 200)
    }

  }

  fetchClassesData() {
    for (const e in this.userService.userData.courses_enrolled) {
      this.apiService.getSpecificClassData(this.userService.userData.courses_enrolled[e]).subscribe((rs: any) => {
        this.classes.push(rs[0]);
      })
    }
  }

}
