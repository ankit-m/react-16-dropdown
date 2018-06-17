(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react16Dropdown"] = factory(require("react"), require("react-dom"));
	else
		root["react16Dropdown"] = factory(root["react"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(2);

var _Menu2 = _interopRequireDefault(_Menu);

var _Trigger = __webpack_require__(5);

var _Trigger2 = _interopRequireDefault(_Trigger);

var _utils = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = { open: Boolean(props.open) };

    _this.menuRef = _react2.default.createRef();
    _this.triggerRef = _react2.default.createRef();
    _this.controlled = Object.prototype.hasOwnProperty.call(_this.props, 'open');

    _this.handleTriggerClick = _this.handleTriggerClick.bind(_this);
    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.handleTriggerKeyDown = _this.handleTriggerKeyDown.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.closeMenu = _this.closeMenu.bind(_this);
    _this.openMenu = _this.openMenu.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.setTriggerRect = _this.setTriggerRect.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTriggerRect();

      _utils.optimizedResize.add(this.setTriggerRect);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.controlled) {
        return;
      }

      if (this.state.open && !prevState.open) {
        typeof this.props.onOpen === 'function' && this.props.onOpen();
      }

      if (this.state.open) {
        this.props.closeOnEscape && document.addEventListener('keyup', this.handleEscape);
        this.props.closeOnClickOutside && document.addEventListener('click', this.handleClickOutside);
      } else {
        this.props.closeOnEscape && document.removeEventListener('keyup', this.handleEscape);
        this.props.closeOnClickOutside && document.removeEventListener('click', this.handleClickOutside);
      }
    }
  }, {
    key: 'setTriggerRect',
    value: function setTriggerRect() {
      this.setState({
        triggerBoundingRect: (0, _utils.getAbsoluteBoundingRect)(this.triggerRef.current)
      });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu(focus) {
      var _this2 = this;

      this.setState({ open: false }, function () {
        focus && _this2.triggerRef.current.focus();
      });
    }
  }, {
    key: 'openMenu',
    value: function openMenu() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(e) {
      if (!this.menuRef.current.contains(e.target)) {
        this.closeMenu();
      }
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape(e) {
      if (e.key === 'Escape') {
        this.closeMenu(true);
      }
    }
  }, {
    key: 'handleTriggerClick',
    value: function handleTriggerClick() {
      if (this.controlled) {
        typeof this.props.onTriggerClick === 'function' && this.props.onTriggerClick();

        return;
      }

      this.setState(function (prevState) {
        return { open: !prevState.open };
      });
    }
  }, {
    key: 'handleTriggerKeyDown',
    value: function handleTriggerKeyDown(e) {
      if (this.controlled) {
        typeof this.props.onTriggerKeyDown === 'function' && this.props.onTriggerKeyDown();

        return;
      }

      if (e.key === 'ArrowDown') {
        this.openMenu();

        e.preventDefault();
      }
    }
  }, {
    key: 'handleOptionClick',
    value: function handleOptionClick(val) {
      typeof this.props.onClick === 'function' && this.props.onClick(val);

      !this.controlled && this.props.closeOnOptionClick && this.closeMenu(true);
    }
  }, {
    key: 'render',
    value: function render() {
      var TriggerElement = this.props.triggerComponent;
      var open = this.controlled ? this.props.open : this.state.open;
      var classes = 'react-16-dropdown' + (this.props.className ? ' ' + this.props.className : '');

      return _react2.default.createElement(
        'div',
        {
          className: classes,
          id: this.props.id
        },
        _react2.default.createElement(TriggerElement, {
          disabled: this.props.disabled,
          label: this.props.triggerLabel,
          renderer: this.props.triggerRenderer,
          triggerRef: this.triggerRef,
          onClick: this.handleTriggerClick,
          onKeyDown: this.handleTriggerKeyDown
        }),
        open && this.state.triggerBoundingRect && _react2.default.createElement(_Menu2.default, _extends({}, this.props, {
          menuRef: this.menuRef,
          triggerBoundingRect: this.state.triggerBoundingRect,
          onClick: this.handleOptionClick
        }))
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;


Dropdown.defaultProps = {
  triggerComponent: _Trigger2.default,
  triggerRenderer: _Trigger.TriggerRenderer,
  triggerLabel: 'Open menu',
  closeOnEscape: true,
  closeOnClickOutside: true,
  closeOnOptionClick: false,
  disabled: false,
  align: 'left'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MenuRenderer(props) {
  return props.children;
}

function Menu(props) {
  var Renderer = props.renderer;

  return _react2.default.createElement(
    'div',
    {
      className: 'menu',
      role: 'listbox',
      ref: props.menuRef,
      tabIndex: -1,
      style: props.style,
      onKeyDown: props.onKeyDown
    },
    _react2.default.createElement(
      Renderer,
      null,
      props.children
    )
  );
}

/**
 * Managing focus
 *
 * @help https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex
 */

var MenuPortal = function (_Component) {
  _inherits(MenuPortal, _Component);

  function MenuPortal(props) {
    _classCallCheck(this, MenuPortal);

    var _this = _possibleConstructorReturn(this, (MenuPortal.__proto__ || Object.getPrototypeOf(MenuPortal)).call(this, props));

    _this.state = { focused: -1 };

    _this.el = document.createElement('div');
    _this.el.classList.add('react-16-dropdown-portal');
    _this.props.portalClassName && _this.el.classList.add(_this.props.portalClassName);

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.getAlignment = _this.getAlignment.bind(_this);
    return _this;
  }

  _createClass(MenuPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.querySelector(this.props.menuPortalTarget).appendChild(this.el);

      this.props.menuRef.current.focus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  }, {
    key: 'getAlignment',
    value: function getAlignment() {
      // @todo allow other alignments
      var boundingRect = this.props.triggerBoundingRect;
      var top = boundingRect.top + boundingRect.height;

      if (this.props.align === 'left') {
        return {
          top: top,
          left: boundingRect.left
        };
      }

      if (this.props.align === 'right') {
        return {
          top: top,
          right: window.innerWidth - boundingRect.right - window.scrollX
        };
      }

      return {};
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var options = this.props.options;

      var maxFocus = options.length - 1;

      // NOTE: This method is called when the menu is
      // opened with the keyboard. This case handles it
      if (e.key === 'Enter' && options[this.state.focused]) {
        this.props.onClick(options[this.state.focused].value);
      } else if (e.key === 'ArrowDown') {
        this.setState(function (prevState) {
          return {
            focused: prevState.focused < maxFocus ? prevState.focused + 1 : maxFocus
          };
        });
      } else if (e.key === 'ArrowUp') {
        this.setState(function (prevState) {
          return {
            focused: prevState.focused > 0 ? prevState.focused - 1 : 0
          };
        });
      }

      return e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var OptionElement = this.props.optionComponent;
      var MenuElement = this.props.menuComponent;

      var menu = _react2.default.createElement(
        MenuElement,
        {
          menuRef: this.props.menuRef,
          renderer: this.props.menuRenderer,
          style: this.getAlignment(),
          onKeyDown: this.handleKeyDown
        },
        this.props.options.map(function (option, i) {
          return _react2.default.createElement(OptionElement, {
            className: option.className,
            data: option,
            focused: _this2.state.focused === i,
            key: option.value,
            renderer: _this2.props.optionRenderer,
            onClick: function onClick() {
              _this2.props.onClick(option);
            }
          });
        })
      );

      return _reactDom2.default.createPortal(menu, this.el);
    }
  }]);

  return MenuPortal;
}(_react.Component);

exports.default = MenuPortal;


MenuPortal.defaultProps = {
  menuComponent: Menu,
  optionComponent: _Option2.default,
  optionRenderer: _Option.OptionRenderer,
  menuRenderer: MenuRenderer,
  menuPortalTarget: 'body'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.OptionRenderer = OptionRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function OptionRenderer(props) {
  return _react2.default.createElement(
    'div',
    { className: props.className },
    props.label
  );
}

var Option = function (_PureComponent) {
  _inherits(Option, _PureComponent);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this.optionRef = _react2.default.createRef();
    return _this;
  }

  _createClass(Option, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.focused !== prevProps.focused && this.props.focused) {
        this.optionRef.current.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Renderer = this.props.renderer;
      var classes = 'option' + (this.props.focused ? ' focused' : '') + (this.props.className ? ' ' + this.props.className : '');

      return _react2.default.createElement(
        'div',
        {
          'aria-selected': this.props.focused,
          role: 'option',
          tabIndex: -1,
          ref: this.optionRef,
          onClick: this.props.onClick
        },
        _react2.default.createElement(Renderer, _extends({}, this.props.data, {
          className: classes
        }))
      );
    }
  }]);

  return Option;
}(_react.PureComponent);

exports.default = Option;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TriggerRenderer = TriggerRenderer;
exports.default = Trigger;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TriggerRenderer(props) {
  return _react2.default.createElement(
    'button',
    {
      className: 'trigger-renderer',
      disabled: props.disabled
    },
    props.label
  );
}

function Trigger(props) {
  var Renderer = props.renderer;

  return _react2.default.createElement(
    'div',
    {
      className: 'trigger',
      disabled: props.disabled,
      ref: props.triggerRef,
      role: 'button',
      onClick: props.onClick,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp
    },
    _react2.default.createElement(Renderer, {
      disabled: props.disabled,
      label: props.label
    })
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbsoluteBoundingRect = getAbsoluteBoundingRect;
var optimizedResize = exports.optimizedResize = function () {
  var callbacks = [];
  var running = false;

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });

    running = false;
  }

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function add(callback) {
      if (!callbacks.length) {
        window.addEventListener('resize', resize);
      }
      addCallback(callback);
    }
  };
}();

function getAbsoluteBoundingRect(el) {
  var clientRect = el.getBoundingClientRect();
  var rect = {};

  rect.left = window.scrollX + clientRect.left;
  rect.top = window.scrollY + clientRect.top;
  rect.right = clientRect.right;
  rect.bottom = clientRect.bottom;
  rect.height = clientRect.height;

  return rect;
}

/***/ })
/******/ ]);
});