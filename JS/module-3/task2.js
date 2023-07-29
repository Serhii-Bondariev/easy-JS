/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }
    get clientData() {
        return { login: this.#login , email: this.#email}  
    }
    set clientData({newLogin, newEmail}) {
        this.#login = newLogin;
        this.#email = newEmail;
    }

}
const client = new Client("mango", "mango@gmail.com");
console.log(client.clientData)
client.clientData = { newLogin: "retro", newEmail: "retro@gmail.com" }
console.log(client.clientData)