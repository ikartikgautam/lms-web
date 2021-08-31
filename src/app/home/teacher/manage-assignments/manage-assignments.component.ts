import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';

@Component({
  selector: 'app-manage-assignments',
  templateUrl: './manage-assignments.component.html',
  styleUrls: ['./manage-assignments.component.scss']
})
export class ManageAssignmentsComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createAssignments() {
    this.dialog.open(CreateAssignmentComponent)
  }

}
