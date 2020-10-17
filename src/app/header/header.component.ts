import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  userField: string;

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    if (!this.userName) {
      localStorage.setItem('userName', `RandomUser${Math.floor(Math.random() * 1000) + 1}`);
      this.userName = localStorage.getItem('userName');
    }
  }
  setUsername() {
    localStorage.setItem('userName', this.userField);
    this.userName = localStorage.getItem('userName');
  }
}
