import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploadModel } from 'src/app/models/api.model';
import { ApiService } from 'src/app/services/api.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss']
})
export class CreateAssignmentComponent implements OnInit {

  ass_det = new FormGroup({
    name: new FormControl(''),
    class: new FormControl(''),
    due_date: new FormControl(''),
  });
  classes = []
  file = new FileUploadModel();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  createAssignments() {
    let inp = document.createElement('input')
    inp.type = 'file'
    inp.click();
    inp.onchange = (e: any) => {
      this.file.blob = e.path[0].files[0];
      this.file.name = `${uuid.v4()}.${this.file.blob.name.split('.').pop()}`;
      this.file.path = `assignments`;
    }
  }

  submit() {
    this.apiService.uploadFileOnFirebase(this.file.name, this.file.path, this.file.blob).then(res => {
      console.log(res);
    })
  }

}
