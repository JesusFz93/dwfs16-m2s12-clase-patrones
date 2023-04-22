import Hamburger from "./Hamburger.js";
class CheeseBurger extends Hamburger {
  constructor() {
    super();
    this.description = "Cheeseburger";
    this.price = 100;
  }
}

export default CheeseBurger;
