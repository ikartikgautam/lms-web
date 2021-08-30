import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss']
})
export class ManageClassComponent implements OnInit {

  classes: any[] = [];

  constructor(private apiService: ApiService, private route: Router, private activeRoute: ActivatedRoute) {
    this.apiService.getClasses().subscribe((classRes: any) => {
      for (const e in classRes) {
        this.classes.push(classRes[e]);
      }
    })
  }

  ngOnInit(): void {
  }

  openClass(e: any) {
    this.route.navigate(['home/viewClass'], { queryParams: { code: e.code } });
  }

}
