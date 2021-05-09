export class User {

    // moyen classique d'initialiser les champs
    // firstName: string;
    // lastName: string;

    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    //raccourci TypeScript
    // avec le mot clé public, les propriétés de l'objet USer seront 
    // directement créées avec les noms donnés dans le constructeur
    constructor(public firstName: string,
        public lastName: string,
        public email: string,
        public drinkPreference: string,
        public hobbies?: string[]
    ) {
    }

}