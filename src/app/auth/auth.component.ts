import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userDetails = new FormGroup({
    // name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  });

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.userDetails.value)
    this.userService.emailSignIn(this.userDetails.value.email, this.userDetails.value.password).then(user => {
      console.log(user);
      this.route.navigate(['/']);
    }, err => {
      console.error(err);
    }).finally(() => {
      console.log('redirext');
    })
  }

  signUp() {
    let formData = this.userDetails.value;

    if (formData.password !== formData.confirm_password) {
      console.error("Please check Password -", formData);
      return
    }

    this.userService.signUp(formData.email, formData.password).then(user => {
      // console.log(user.user!.uid);
      this.route.navigate(['auth/createProfile'], { queryParams: { id: user.user!.uid } });
    }, err => {
      console.error(err);
    })
  }

}
