(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react16Dropdown"] = factory(require("react"), require("react-dom"));
	else
		root["react16Dropdown"] = factory(root["react"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Menu = __webpack_require__(3);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleButtonClick = _this.handleButtonClick.bind(_this);
    _this.handleOptionClick = _this.handleOptionClick.bind(_this);
    _this.handleButtonKeyUp = _this.handleButtonKeyUp.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.closeMenu = _this.closeMenu.bind(_this);
    _this.openMenu = _this.openMenu.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.setMenuRef = _this.setMenuRef.bind(_this);
    _this.setButtonRef = _this.setButtonRef.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.open) {
        document.addEventListener('keyup', this.handleEscape);
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('keyup', this.handleEscape);
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu(focus) {
      var _this2 = this;

      this.setState({ open: false }, function () {
        focus && _this2.button.focus();
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
      if (!this.menu.contains(e.target)) {
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
    key: 'handleButtonClick',
    value: function handleButtonClick(e) {
      this.setState(function (prevState) {
        return { open: !prevState.open };
      });
    }
  }, {
    key: 'handleOptionClick',
    value: function handleOptionClick(val) {
      this.props.onClick(val);
      this.closeMenu(true);
    }
  }, {
    key: 'handleButtonKeyUp',
    value: function handleButtonKeyUp(e) {
      if (e.key === 'ArrowDown') {
        this.openMenu();
      }
    }
  }, {
    key: 'setMenuRef',
    value: function setMenuRef(node) {
      this.menu = node;
    }
  }, {
    key: 'setButtonRef',
    value: function setButtonRef(node) {
      this.button = node;
    }
  }, {
    key: 'render',
    value: function render() {
      // @todo use default refs
      var Button = this.props.buttonRenderer || DefaultButton;
      var Menu = this.props.menuRenderer || _Menu2.default;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(Button, {
          buttonRef: this.setButtonRef,
          onClick: this.handleButtonClick,
          onKeyUp: this.handleButtonKeyUp
        }),
        this.state.open && _react2.default.createElement(Menu, _extends({}, this.props, {
          menuRef: this.setMenuRef,
          onClick: this.handleOptionClick
        }))
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;


function DefaultButton(props) {
  return _react2.default.createElement(
    'button',
    {
      ref: props.buttonRef,
      onClick: props.onClick,
      onKeyUp: props.onKeyUp
    },
    'Click me!'
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Managing focus
 *
 * @help https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex
 */
var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = { focused: -1 };
    // @todo add class
    _this.el = document.createElement('div');

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.appendChild(this.el);

      this.node.focus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  }, {
    key: 'setRef',
    value: function setRef(node) {
      this.node = node;

      this.props.menuRef(node);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.key === 'Tab') {
        // prevent blur from Tab key (only escape allowed)
        e.preventDefault();
      }
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      var options = this.props.options;
      var maxFocus = options.length - 1;

      // NOTE: This method is called when the menu is
      // opened with the keyboard. This case handles it
      if (e.key === 'Enter' && options[this.state.focused]) {
        this.props.onClick(options[this.state.focused].value);
      } else if (e.key === 'ArrowDown') {
        this.setState(function (prevState) {
          return { focused: prevState.focused < maxFocus ? prevState.focused + 1 : maxFocus };
        });
      } else if (e.key === 'ArrowUp') {
        this.setState(function (prevState) {
          return { focused: prevState.focused > 0 ? prevState.focused - 1 : 0 };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Option = this.props.optionRenderer || DefaultOption,
          Menu = this.props.menuRenderer || DefaultMenu;

      var menu = _react2.default.createElement(
        Menu,
        {
          menuRef: this.setRef,
          onKeyUp: this.handleKeyUp,
          onKeyDown: this.handleKeyDown
        },
        this.props.options.map(function (e, i) {
          return _react2.default.createElement(Option, {
            focused: _this2.state.focused === i,
            key: e.value,
            label: e.label,
            onClick: function onClick() {
              _this2.props.onClick(e.value);
            },
            onMouseOver: function onMouseOver() {
              _this2.setState({ focused: i });
            }
          });
        })
      );

      return _reactDom2.default.createPortal(menu, this.el);
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;


function DefaultMenu(props) {
  return _react2.default.createElement(
    'div',
    {
      role: 'listbox',
      className: 'menu',
      tabIndex: -1,
      ref: props.menuRef,
      onKeyUp: props.onKeyUp,
      onKeyDown: props.onKeyDown
    },
    props.children
  );
}

function DefaultOption(props) {
  return _react2.default.createElement(
    'div',
    {
      role: 'option',
      className: 'item' + (props.focused ? ' focused' : ''),
      onClick: props.onClick,
      onMouseOver: props.onMouseOver
    },
    props.label
  );
}

/***/ })
/******/ ]);
});