function createNewTargetObject(createNew) {
  return Object.create(createNew.prototype);
}
function classWithoutCallParentConstructor(parentClass) {
  return class extends parentClass {
    constructor() {
      return createNewTargetObject(new.target);
    }

  };
}

export default classWithoutCallParentConstructor;
export { classWithoutCallParentConstructor, createNewTargetObject };
//# sourceMappingURL=class-without-call-parent-constructor.esm.js.map
