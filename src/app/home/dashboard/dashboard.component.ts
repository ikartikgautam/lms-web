import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  calEvents = [{ title: 'Assignment 1 submission' }, { title: 'Assignment 2 submission' }]

  constructor() { }

  ngOnInit(): void {
  }

}
