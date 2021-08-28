import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listItems: any[] = [];

  constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService) {
    // this.userService.getUserType().subscribe(userType => {
    //   if (userType == 'teacher') {
    //     this.route.navigate(['teacher'], { relativeTo: this.activeRoute })
    //   } else if (userType == 'student') {
    //     this.route.navigate(['student'], { relativeTo: this.activeRoute })
    //   }
    // })

    if (1 == 1) {
      this.listItems = [
        { title: 'Create Class', route: '' },
        { title: 'Manage Classes', route: '' },
        { title: 'Manage Assignments', route: '' },
        { title: 'Manage Tests', route: '' },
      ];
    } else {
      this.listItems = [
        { title: 'Assignments', route: '' },
        { title: 'Tests & Quizes', route: '' },
        { title: 'Time Table', route: '' },
        { title: 'See Results', route: '' },
      ];
    }

  }

  ngOnInit(): void {
  }

  navigateTo(route: string) {
    this.route.navigate([route], { relativeTo: this.activeRoute })
  }

}
