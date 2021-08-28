import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuClick = new EventEmitter();
  menuBtn = 'menu';

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.userService.signOut().then(res => {
      console.log(res);
      this.route.navigate(['/']);
    })
  }

  /**
   * Toogle MatSideBar Menu
   */
  toggleSideMenu() {
    this.menuBtn == 'menu' ? this.menuBtn = 'arrow_back' : this.menuBtn = 'menu';
    document.getElementById('menu-btn')!.style.rotate = '180deg';
    this.menuClick.emit();
  }

}
