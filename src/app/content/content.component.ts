import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  userName: any;
  // eslint-disable-next-line no-useless-constructor
  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private fb: FormBuilder) {}
  id: string;
  hideData: boolean = true;
  name: string;
  unHookListner;
  timeOut = true;
  discussionData = {
    title: 'discussionTitle',
    imageUrl: '../assets/dummy.webp'
  };
  messages: any;
  chatForm: FormGroup;
  userActivity;
  source;
  unsubscriber;
  ngOnInit() {
    this.chatForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', Validators.required]
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.getDiscussionDetails(this.id);
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

  loadPrevious() {
    this.firebaseService.getOldMessages(this.id, this.messages[Object.keys(this.messages)[0]].timestamp).then(val => {
      this.messages = { ...val, ...this.messages };
    });
  }

  disableUser = () => {
    this.timeOut = false;
    this.unHookListner.off();
    this.unsubscriber.unsubscribe();
  };

  onSubmit() {
    this.writeMessages(this.id, this.chatForm.value);
    this.chatForm.setValue({ ...this.chatForm.value, message: '' });
  }
  writeMessages(id, data) {
    this.name = this.userName;
    this.firebaseService.writeMessages(id, { ...data, name: this.name });
  }
  getMessages(id) {
    this.unHookListner = this.firebaseService.startGetttingMessages(id);
    this.firebaseService.listenToMessages.subscribe(data => (this.messages = { ...this.messages, ...data }));
  }
  getDiscussionDetails(id) {
    this.firebaseService.getDiscussionDetails(id).then(data => {
      if (data) {
        (this.discussionData = data), this.getMessages(this.id), (this.hideData = false);
      }
    });
  }
}
