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
        { title: 'Manage Classes', route: '' },
        { title: 'Manage Assignments', route: '' },
        { title: 'Manage Tests', route: '' },
      ];
      this.route.navigate(['teacher'], { relativeTo: this.activeRoute })
    } else if (userType == 'student') {
      this.listItems = [
        { title: 'Assignments', route: '' },
        { title: 'Tests & Quizes', route: '' },
        { title: 'Time Table', route: '' },
        { title: 'See Results', route: '' },
      ];
      this.route.navigate(['student'], { relativeTo: this.activeRoute })
    }
  }

  navigateTo(route: string) {
    console.log(route)
    this.route.navigate([route], { relativeTo: this.activeRoute })
  }

}
