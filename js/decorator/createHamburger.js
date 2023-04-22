const createHamburger = (superClass) => {
  superClass = new superClass();
  return {
    getHamburger() {
      return superClass.getHamburger();
    },
    with(...mixins) {
      return mixins.reduce((c, mixin) => {
        return new mixin(c);
      }, superClass);
    },
  };
};

export default createHamburger;
