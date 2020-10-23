import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';
import { FirebaseService } from './shared/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'discussUI';
  login: Boolean = true;
  constructor(private firebaseService: FirebaseService, private router: Router) {}
  ngOnInit() {
    const firebaseConfig = environment.config;
    firebase.initializeApp(firebaseConfig);
    const myThis = this;
    // this.firebaseService.userData = '';
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        myThis.firebaseService.userData.next(user);
        myThis.login = false;
        myThis.router.navigate([''])
      } else {
        myThis.firebaseService.userData.next(null);
        myThis.login = false;
        myThis.router.navigate(['']);
        console.log('user logged out');
      }
    });
  }
}
