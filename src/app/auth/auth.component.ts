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
    email: new FormControl(''),
    password: new FormControl('')
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

}
