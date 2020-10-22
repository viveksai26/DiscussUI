import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}
  ngOnInit() {}
  login() {
    this.firebaseService.login();
  }
}
