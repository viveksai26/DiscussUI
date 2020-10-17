import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyBm6PuVivP0paGo6aY-0nJRRKvm905AYFE',
  authDomain: 'discussapp-cab58.firebaseapp.com',
  databaseURL: 'https://discussapp-cab58.firebaseio.com',
  projectId: 'discussapp-cab58',
  storageBucket: 'discussapp-cab58.appspot.com',
  messagingSenderId: '623343408618',
  appId: '1:623343408618:web:80c188e5f0f8a3e5e9ce93',
  measurementId: 'G-EMX4K8QZS1'
};
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
