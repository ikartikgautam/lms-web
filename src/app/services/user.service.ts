import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { userDataModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData = new userDataModel();

  constructor(private fireauth: AngularFireAuth) { }

  emailSignIn(email: string, pass: string) {
    return this.fireauth.signInWithEmailAndPassword(email, pass);
  }

  isSignedIn() {
    return this.fireauth.authState
  }

  signOut() {
    return this.fireauth.signOut();
  }

  signUp(email: string, password: string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password);
  }

  getUserType() {
    // return
  }

}
