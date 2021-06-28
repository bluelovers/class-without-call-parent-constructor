'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function createNewTargetObject(createNew) {
  return Object.create(createNew.prototype);
}
/**
 * @see https://stackoverflow.com/a/61541378/4563339
 */

function classWithoutCallParentConstructor(parentClass) {
  return /*#__PURE__*/function (_parentClass) {
    _inheritsLoose(_class, _parentClass);

    // @ts-ignore
    function _class() {
      var _this;

      return createNewTargetObject(this instanceof _class ? this.constructor : void 0) || _assertThisInitialized(_this);
    }

    return _class;
  }(parentClass);
}

exports.classWithoutCallParentConstructor = classWithoutCallParentConstructor;
exports.createNewTargetObject = createNewTargetObject;
exports.default = classWithoutCallParentConstructor;
//# sourceMappingURL=class-without-call-parent-constructor.cjs.development.js.map
