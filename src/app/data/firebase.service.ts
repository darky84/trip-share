import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  events: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.events = this.db.list('/events');
  }

}