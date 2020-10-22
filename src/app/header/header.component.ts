import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor(private firebaseService: FirebaseService, private router: Router) {}
  ngOnInit() {
    this.firebaseService.userData.subscribe(
      data => {
        if (data) {
        this.userName = data.displayName
      } else {
        this.userName = null
      }
    }
    )
  }
  login() {
    this.firebaseService.login();
  }
  logout() {
    this.firebaseService.logout();
  }
}
