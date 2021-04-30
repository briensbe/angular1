export class AppareilService {

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

switchOnAll() {
    for (let app of this.appareils) {
        app.status = 'allumé';
    }
}

switchOffAll() {
    for (let app of this.appareils) {
        app.status = 'éteint';
    }
}

switchOnOne(index: number) {
    this.appareils[index].status='allumé';
}

switchOffOne(index: number) {
    this.appareils[index].status='éteint';
}
}