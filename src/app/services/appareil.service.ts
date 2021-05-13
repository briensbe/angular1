import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AppareilService {

  appareilSubject = new Subject<any[]>(); // les objets émis seront de type any[]

  private appareils = [];
  // Initialisation ci-dessous (tant qu'on n'avait pas le service de sauvegarde sur firebase)
  // private appareils = [
  //   {
  //     id: 1,
  //     name: 'Télévision',
  //     status: 'éteint'
  //   },
  //   {
  //     id: 2,
  //     name: 'Hifi',
  //     status: 'allumé'
  //   },
  //   {
  //     id: 3,
  //     name: 'Lave-vaisselle',
  //     status: 'éteint'
  //   }
  // ];

  constructor(private httpClient: HttpClient) {

  }

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

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilToServer() {
    this.httpClient.put(
      'https://http-client-demo-mpa-default-rtdb.europe-west1.firebasedatabase.app/appareils.json',
      this.appareils).subscribe(
        () => {
          console.log('enregistrement terminé');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! : ' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient.get<any[]>(
      'https://http-client-demo-mpa-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject(); // A NE PAS OUBLIER
        },
        (error) => {
          console.log('Erreur de chargement ! : ' + error);
        }
      );
  }

}