import CheeseBurger from "./CheeseBurger.js";
import {
  HamDecorator,
  BaconDecorator,
  PickleDecorator,
} from "./groupDecorators.js";
import createHamburger from "./createHamburger.js";

const hamburger = createHamburger(CheeseBurger);
console.log(hamburger.getHamburger());
//output You order is: Cheeseburger and the price 100

const hamburgerWithX = createHamburger(CheeseBurger).with(
  HamDecorator,
  BaconDecorator,
  PickleDecorator
);
console.log(hamburgerWithX.getHamburger());
//output You order is: Cheeseburger with ham with bacon and the price 124
