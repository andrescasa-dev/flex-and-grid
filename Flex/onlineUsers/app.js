import userComponent from "./components/userComponent.js";

const div_users = document.querySelector('#users')

class app{
  constructor(){
    this.run();
  }

  async run(){
    this.users = await this.getUsers();
    console.log(this.users)
    div_users.innerHTML = this.users.map(user=> userComponent(user)).join('')
  }

  async getUsers(){
    const response = await fetch('./users.json');
    const usersData = response.json();
    return usersData
  }

}

new app();