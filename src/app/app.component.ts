import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  secondes: number;

  constructor() { }

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      () => {
        console.log('Un erreur s\'est produite');
      },
      () => {
        console.log('Observable complétée');
      }
    );
  }

}
