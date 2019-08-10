class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this._profession = "";
  }

  getName() {
    return this.name;
  }

  getAge() {
    return `${this.age} anos de idade`;
  }

  set profession(profession) {
    if (profession) {
      this._profession = profession;
      return true;
    }

    return "Profissão invalida";
  }

  get profession() {
    return this._profession;
  }
}

module.exports = User;
