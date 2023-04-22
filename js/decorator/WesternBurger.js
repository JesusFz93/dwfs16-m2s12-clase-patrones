import Hamburger from "./Hamburger.js";

class WesternBurger extends Hamburger {
  constructor() {
    super();
    this.description = "Western Burger";
    this.price = 105;
  }
}
export default WesternBurger;
