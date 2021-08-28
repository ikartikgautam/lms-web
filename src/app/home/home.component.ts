import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private activeRoute: ActivatedRoute, private userService: UserService) {
    // this.userService.getUserType().subscribe(userType => {
    //   if (userType == 'teacher') {
    //     this.route.navigate(['teacher'], { relativeTo: this.activeRoute })
    //   } else if (userType == 'student') {
    //     this.route.navigate(['student'], { relativeTo: this.activeRoute })
    //   }
    // })
  }

  ngOnInit(): void {
  }

}
