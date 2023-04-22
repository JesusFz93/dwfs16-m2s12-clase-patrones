import HamburgerDecorator from "./HamburgerDecorator.js";

class BaconDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with bacon";
  }
  get price() {
    return this.burger.price + 9;
  }
}

class HamDecorator extends HamburgerDecorator {
  get description() {
    return this.burger.description + " with ham";
  }
  get price() {
    return this.burger.price + 15;
  }
}

class MeatDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with meat";
  }
  get price() {
    return this.burger.price + 20;
  }
}

class EggDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with egg";
  }
  get price() {
    return this.burger.price + 12;
  }
}

class PickleDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with pickle";
  }
  get price() {
    return this.burger.price + 5;
  }
}

class CheeseDecorator extends HamburgerDecorator {
  constructor(burger) {
    super(burger);
  }
  get description() {
    return this.burger.description + " with cheese";
  }
  get price() {
    return this.burger.price + 9;
  }
}

export {
  CheeseDecorator,
  BaconDecorator,
  EggDecorator,
  HamDecorator,
  MeatDecorator,
  PickleDecorator,
};
