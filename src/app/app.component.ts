import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
const firebaseConfig = environment.config;
firebase.initializeApp(firebaseConfig);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'discussUI';

  ngOnInit() {}
}
