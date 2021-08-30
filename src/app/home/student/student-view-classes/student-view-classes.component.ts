import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-view-classes',
  templateUrl: './student-view-classes.component.html',
  styleUrls: ['./student-view-classes.component.scss']
})
export class StudentViewClassesComponent implements OnInit {

  constructor(private apiService: ApiService, private route: Router, private activeRoute: ActivatedRoute) {
    // this.apiService.
  }

  ngOnInit(): void {
  }

}
