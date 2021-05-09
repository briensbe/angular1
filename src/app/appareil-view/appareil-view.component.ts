import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
  

  appareils: any[];
  appareilsSubscription: Subscription;

  // appOne = "Télé";
  // appTwo = "Hifi";
  // appThree = "Lave-vaisselle";

  constructor(private appareilService: AppareilService) {
    setTimeout(() => { this.isAuth = true; }, 4000);
  }

ngOnInit() {
  //this.appareils = this.appareilService.appareils;
  this.appareilsSubscription = this.appareilService.appareilSubject.subscribe(
    (appareils: any[]) => {this.appareils = appareils;}
  )
  this.appareilService.emitAppareilSubject();
}

onAllumer() {
  console.log("Tout Allumer");
  this.appareilService.switchOnAll();
}
onEteindre() {
  this.appareilService.switchOffAll();
}


}
