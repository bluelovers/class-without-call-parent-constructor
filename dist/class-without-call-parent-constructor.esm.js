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
function classWithoutCallParentConstructor(parentClass) {
  return /*#__PURE__*/function (_parentClass) {
    _inheritsLoose(_class, _parentClass);

    function _class() {
      var _this;

      return createNewTargetObject(this instanceof _class ? this.constructor : void 0) || _assertThisInitialized(_this);
    }

    return _class;
  }(parentClass);
}

export default classWithoutCallParentConstructor;
export { classWithoutCallParentConstructor, createNewTargetObject };
//# sourceMappingURL=class-without-call-parent-constructor.esm.js.map
