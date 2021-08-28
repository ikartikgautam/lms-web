import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

}
