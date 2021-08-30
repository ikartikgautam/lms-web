import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classDataModel } from '../models/class.model';
import { userDataModel } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private userService: UserService) { }

  /**
   * Get user data stored in DB
   * @returns Promise
   */
  getUserData() {
    return new Promise((resolve, reject) => {
      this.userService.isSignedIn().subscribe(user => {
        // console.log(user!.email);
        this.http.get(this._baseUrl + `/api/users?email=${user!.email}`).subscribe((userData: any) => {
          resolve({ data: userData.meta, status: true });
        }, err => reject({ msg: 'User data not found', err, status: false }))
      }, err => reject({ msg: 'User not found', err, status: false }))
    })
  }

  /**
   * Create new user profile in DB
   */
  createNewUserProfile(body: userDataModel) {
    return this.http.post(this._baseUrl + '/api/users', body);
  }

  createNewClass(body: classDataModel) {
    return this.http.post(this._baseUrl + `/api/createclass?email=${this.userService.userData.email}`, body);
  }

  getClasses() {
    return this.http.get(this._baseUrl + `/api/createclass?email=${this.userService.userData.email}`);
  }

  getClassData(class_code: string) {
    return this.http.get(this._baseUrl + `/api/createclass/${class_code}?email=${this.userService.userData.email}`);
  }

  getStudentClasses() {
    this.http.get('');
  }

  getStudentsEnrolled(class_code: string) {
    return this.http.get(this._baseUrl + `/api/users/students/${class_code}?email=${this.userService.userData.email}`);
  }

  getAllStudents() {
    return this.http.get(this._baseUrl + `/api/users/students?email=${this.userService.userData.email}`);
  }

  addStudentToClass(class_code: string, student_id: string) {
    return this.http.post(this._baseUrl + `/api/createclass/add/${class_code}?email=${this.userService.userData.email}`, { selected_students: student_id });
  }

  getSpecificClassData(class_id: string) {
    return this.http.get(this._baseUrl + `/api/createclass/getClass/${class_id}?email=${this.userService.userData.email}`);
  }

}
