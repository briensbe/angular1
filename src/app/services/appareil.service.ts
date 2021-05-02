export class AppareilService {

  appareils = [
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
  }

  switchOffAll() {
    for (let app of this.appareils) {
      app.status = 'éteint';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}