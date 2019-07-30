import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TripsListComponent } from './views/trips-list.component';
import { firebaseCredentials } from './data/config';
import { FirebaseService } from './data/firebase.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseCredentials),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    TripsListComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule { }

// https://coolors.co/6cd4ff-c5d1eb-5a7684-395b50-1f2f16