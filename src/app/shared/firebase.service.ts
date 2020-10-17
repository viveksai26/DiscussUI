import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  listenToMessages: BehaviorSubject<any> = new BehaviorSubject(1);
  // eslint-disable-next-line no-useless-constructor
  constructor(private router: Router) {}

  writeMessages(id, data) {
    firebase
      .database()
      .ref(`messages/${id}`)
      .push({ ...data, timestamp: firebase.database.ServerValue.TIMESTAMP });
  }

  startGetttingMessages = id => {
    const refGetMessage = firebase
      .database()
      .ref(`messages/${id}`)
      .limitToLast(1)
      .orderByChild('timestamp');
    refGetMessage.on('value', snapshot => {
      this.listenToMessages.next(snapshot.val());
    });
    return refGetMessage;
  };
  getOldMessages = (id, timestamp) => {
    return firebase
      .database()
      .ref(`messages/${id}`)
      .limitToLast(5)
      .endAt(timestamp)
      .orderByChild('timestamp')
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          return snapshot.val();
        }
      });
  };

  getDiscussionDetails(id) {
    return firebase
      .database()
      .ref(`discussions/${id}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          return snapshot.val();
        }
        this.router.navigate(['/stopChangingURL']);
      });
  }
}

// useful Stuff
//   FirebaseDatabase.getInstance().getReference()
// .child("Conversation").child(conversationID)
// .limitToLast(100)
// .orderByChild("timestamp")
// .startAt(dateToStart)    // pass timestamp from when you want to start filtering
// .endAt(dateToEnd); // pass timestamp till when you want to apply filtering
