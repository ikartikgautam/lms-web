import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userDataModel } from 'src/app/models/user.model';
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
    type: new FormControl(''),
  });

  classes = [1, 2, 3, 4, 5, 6]

  constructor(private apiService: ApiService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createProfile() {
    let id = this.activeRoute.queryParams.subscribe(params => {
      console.log(params.email)

      let userDetails = new userDataModel();
      userDetails.email = params.email;
      userDetails.firstname = this.userDetail.value.firstName;
      userDetails.lastname = this.userDetail.value.lastName;
      userDetails.type = this.userDetail.value.type;
      userDetails.dob = this.userDetail.value.dateOfBirth;
      userDetails.class_in = this.userDetail.value.class;

      this.apiService.createNewUserProfile(userDetails).subscribe(res => {
        console.log(res)
        this.route.navigate(['home']);
      }, err => {
        console.error(err);
      })
    })
  }

}
