import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

  userDetail = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    class: new FormControl(''),
    teacher: new FormControl(''),
  });

  classes = [1, 2, 3, 4, 5, 6]

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit(): void {
  }

  createProfile() {
    this.apiService.createNewUserProfile()
    // .subscribe(res => {
    // console.log(res)
    // }, err => {
    //   console.err(err);
    // })
    this.route.navigate(['home']);
  }

}
