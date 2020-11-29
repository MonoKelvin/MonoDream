export enum ESex {
    Male,
    Female,
    Secret,
}

export default class User {
    // private mUID: string;

    userName: string;
    sex: ESex;

    constructor() {
        this.userName = '佚名';
        this.sex = ESex.Secret;
    }
}
