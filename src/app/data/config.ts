import {Trip} from './trip'

export const firebaseCredentials = {
  apiKey: "AIzaSyDCYV_FWwpuEibGcQd6TACMs-yOsH3Q7is",
  authDomain: "tripshare-d39ed.firebaseapp.com",
  databaseURL: "https://tripshare-d39ed.firebaseio.com",
  projectId: "tripshare-d39ed",
  storageBucket: "tripshare-d39ed.appspot.com",
  messagingSenderId: "176484399667",
  appId: "1:176484399667:web:232599c719bffd57"
};

export interface State {
  curTrip: Trip;
}

export const curState: State = {
  curTrip: {
    id: "",
    name: "Grecia"
  }
}