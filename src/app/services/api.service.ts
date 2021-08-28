import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDataModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  /**
   * Create new user profile in DB
   */
  createNewUserProfile(body: userDataModel) {
    return this.http.post(this._baseUrl + '/api/users', body);
  }

}
