import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Trip } from '../data/trip';

@Component({
  selector: 'ts-trips-list',
  template: `
  `,
  styles: [
    ``
  ]
})
export class TripsListComponent {

  @Input() trips: Array<Trip>;

}
