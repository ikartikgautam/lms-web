import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userDataModel } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listItems: any[] = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService, private apiService: ApiService) {
    this.apiService.getUserData().then((res: any) => {
      if (res.status) {
        let user = new userDataModel();
        user.setValues(res.data);
        this.userService.userData = user;
        this.assignUserType(this.userService.userData.type);
      } else {
        console.error(res);
        // show error
      }
    })

  }

  ngOnInit(): void {
  }

  assignUserType(userType: string) {
    console.log(userType)
    if (userType == 'teacher') {
      this.listItems = [
        { title: 'Create Class', route: 'createclass' },
        { title: 'Manage Classes', route: 'manageclass' },
        { title: 'Manage Assignments', route: 'manageAssignments' },
        { title: 'Manage Tests', route: '' },
      ];
      this.route.navigate(['teacher'], { relativeTo: this.activeRoute })
    } else if (userType == 'student') {
      this.listItems = [
        { title: 'View Classes', route: 'student-view-classes' },
        { title: 'Assignments', route: '' },
        { title: 'Tests & Quizes', route: '' },
        { title: 'Time Table', route: '' },
        { title: 'See Results', route: '' },
      ];
      this.route.navigate(['student'], { relativeTo: this.activeRoute })
    }
  }

  navigateTo(route: string) {
    if (route == '/home') {
      this.route.navigate([`${route}/${this.userService.userData.type}`], { relativeTo: this.activeRoute })
      return
    }
    console.log(route)
    this.route.navigate([route], { relativeTo: this.activeRoute })
  }

}
