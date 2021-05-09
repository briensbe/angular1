import { Subject } from "rxjs";

export class AppareilService {

  appareilSubject = new Subject<any[]>(); // les objets émis seront de type any[]

  private appareils = [
    {
      id: 1,
      name: 'Télévision',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Hifi',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Lave-vaisselle',
      status: 'éteint'
    }
  ];

emitAppareilSubject() {
  this.appareilSubject.next(this.appareils.slice());
}

getAppareilById(id: number) {
  const appareil = this.appareils.find(
    (appareilObject) => {
      return appareilObject.id === id;
    }
  )
  return appareil;
}

  switchOnAll() {
    for (let app of this.appareils) {
      app.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let app of this.appareils) {
      app.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }
}