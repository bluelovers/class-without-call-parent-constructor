'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.classWithoutCallParentConstructor = classWithoutCallParentConstructor;
exports.createNewTargetObject = createNewTargetObject;
exports.default = classWithoutCallParentConstructor;
//# sourceMappingURL=class-without-call-parent-constructor.cjs.development.js.map
