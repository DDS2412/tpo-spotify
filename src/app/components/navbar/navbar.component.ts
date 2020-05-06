import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

declare const loginRedirect: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  login(){
    loginRedirect();
  }

  logout() {
    this.authService.breakConnection();
  }

  isLogin() {
    return this.authService.isAuthenticated();
  }
}
