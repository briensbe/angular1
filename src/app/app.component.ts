import { Component } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
  isAuth = false;

  //lastUpdate = new Date();

  //écriture avec une Promise
  lastUpdate = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Work Complete");
      const date = new Date();
      resolve(date);
    }, 2000);
  });
  

  appareils = [
    {
      name: 'Télévision',
      status: 'éteint'
    },
    {
      name: 'Hifi',
      status: 'allumé'
    },
    {
      name: 'Lave-vaisselle',
      status: 'éteint'
    }
  ];

  // appOne = "Télé";
  // appTwo = "Hifi";
  // appThree = "Lave-vaisselle";

  constructor(private appareilService: AppareilService) {
    setTimeout(() => { this.isAuth = true; }, 4000);
  }
onAllumer() {
  console.log("Tout Allumer");
}

}
