import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { classDataModel } from 'src/app/models/class.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  classDetails = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    desc: new FormControl(''),
  });

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  submit() {
    let user = new classDataModel();
    this.apiService.createNewClass(user).subscribe((res) => {
      console.log(res);
    })
  }

}
