import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  constructor() {

    // this.apiService.getUserData().then((data: any) => {
    //   console.log(data['data'])
    // })

  }

  ngOnInit(): void {
  }

}
