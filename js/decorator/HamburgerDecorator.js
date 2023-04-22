import Hamburger from "./Hamburger.js";

class HamburgerDecorator extends Hamburger {
  constructor(burger) {
    super();
    this.burger = burger;
  }
}

export default HamburgerDecorator;
