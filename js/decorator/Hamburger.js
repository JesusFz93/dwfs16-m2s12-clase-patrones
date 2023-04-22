class Hamburger {
  constructor() {
    this._drescription = "Unknown Hamburger";
    this._price = 0;
  }
  set price(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
  get drescription() {
    return this._drescription;
  }
  getHamburger() {
    return `You order is: ${this.description} and the price ${this.price}`;
  }
}

export default Hamburger;
