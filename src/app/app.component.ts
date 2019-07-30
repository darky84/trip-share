import { Component } from '@angular/core';

@Component({
  selector: 'ts-app',
  template: `
    <header>
      <h1>TripShare</h1>
    </header>
    <main>
    Topo <br/>
    Gatto

    </main>
  
  `,
  styles: [`
  header {
    /* border: 3px solid #00bd9d; */
    background-color: #6cd4ff;
    color: #fffbfa;
    font-variant: small-caps;
    padding-left: 10px;
    font-family: 'Roboto', sans-serif;
  }
  main {
    height: 121px;
    background-size: 30px 30px;
    background-image: linear-gradient(to right, #395b508f 1px, transparent 1px), linear-gradient(to bottom, #395b50 1px, transparent 1px);
    line-height: 30px;
    font-family: 'Raleway', sans-serif;
    color: #1f2f16;
    font-weight: bold;
    padding-left: 10px;
  }

  
  `]
})
export class AppComponent  {

}
