function createNewTargetObject(t) {
  return Object.create(t.prototype);
}

function classWithoutCallParentConstructor(t) {
  return class extends t {
    constructor() {
      return createNewTargetObject(new.target);
    }
  };
}

export { classWithoutCallParentConstructor, createNewTargetObject, classWithoutCallParentConstructor as default };
//# sourceMappingURL=index.esm.mjs.map
