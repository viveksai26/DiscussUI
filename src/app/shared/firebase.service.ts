import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit {
  listenToMessages: BehaviorSubject<any> = new BehaviorSubject(1);
  provider = new firebase.auth.GoogleAuthProvider();
  // eslint-disable-next-line no-useless-constructor
  constructor(private router: Router) {}
  ngOnInit() {
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  }
  login() {
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential['accessToken'];
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log(user);
        
        // ...
      } else {
        console.log('user sign out');
        
        // User is signed out.
        // ...
      }
    });
  }
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
