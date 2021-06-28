function createNewTargetObject(createNew) {
  return Object.create(createNew.prototype);
}
/**
 * @see https://stackoverflow.com/a/61541378/4563339
 */

function classWithoutCallParentConstructor(parentClass) {
  return class extends parentClass {
    // @ts-ignore
    constructor() {
      return createNewTargetObject(new.target);
    }

  };
}

export default classWithoutCallParentConstructor;
export { classWithoutCallParentConstructor, createNewTargetObject };
//# sourceMappingURL=class-without-call-parent-constructor.esm.js.map
