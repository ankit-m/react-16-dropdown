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
    _this.focusTrigger = _this.focusTrigger.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTriggerRect();

      this.props.autoFocus && this.focusTrigger();

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
      if (!this.triggerRef.current) {
        return;
      }

      this.setState({
        triggerBoundingRect: (0, _utils.getAbsoluteBoundingRect)(this.triggerRef.current)
      });
    }

    // focus the custom component passed or renderer

  }, {
    key: 'focusTrigger',
    value: function focusTrigger() {
      if (this.props.triggerComponent) {
        this.triggerRef.current.focus();
      } else {
        this.triggerRef.current.firstChild.focus();
      }
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu(focus) {
      var _this2 = this;

      this.setState({ open: false }, function () {
        focus && _this2.focusTrigger();
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
      // re-calculating the position of dropdown to remove scrolling side effects
      this.setTriggerRect();

      typeof this.props.onTriggerClick === 'function' && this.props.onTriggerClick();

      if (this.controlled) {
        return;
      }

      this.setState(function (prevState) {
        return { open: !prevState.open };
      });
    }
  }, {
    key: 'handleTriggerKeyDown',
    value: function handleTriggerKeyDown(e) {
      typeof this.props.onTriggerKeyDown === 'function' && this.props.onTriggerKeyDown();

      if (this.controlled) {
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
      var TriggerElement = this.props.triggerComponent || _Trigger2.default;
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
          controlled: this.controlled,
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
  autoFocus: false,
  triggerLabel: 'Open menu',
  closeOnEscape: true,
  closeOnClickOutside: true,
  closeOnOptionClick: false,
  disabled: false,
  align: 'left',
  options: [],
  sections: []
};

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

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Default menu renderer
 *
 * @param {Object} props - React props
 * @param {ReactElement} props.children - Options to render
 * @returns {ReactElement} menu
 */
function MenuRenderer(props) {
  return props.children;
}

/**
 * Default component for menu section
 *
 * @param {Object} props - React props
 * @param {String} props.title - Section title
 * @param {ReactElement} props.children - Options in the section
 * @returns {ReactElement} menu section
 */
function MenuSectionRenderer(props) {
  var className = 'menu-section' + (props.className ? ' ' + props.className : '');

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'div',
      { className: 'menu-section__title' },
      props.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'menu-section__body' },
      props.children
    )
  );
}

/**
 * Default menu component
 *
 * @param {Object} props - React props
 * @param {ReactElement} props.renderer - Menu renderer
 * @param {ReactRef} props.menuRef - Ref for the menu component
 * @param {Object} props.style - Inline styles for menu
 * @param {Function} props.onKeyDown - Handler for keyboard events
 * @param {ReactElement} props.children - Option elements
 */
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
 * Portal for the menu
 *
 * @help https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex
 */

var MenuPortal = function (_Component) {
  _inherits(MenuPortal, _Component);

  function MenuPortal(props) {
    _classCallCheck(this, MenuPortal);

    var _this = _possibleConstructorReturn(this, (MenuPortal.__proto__ || Object.getPrototypeOf(MenuPortal)).call(this, props));

    _this.state = { focused: -1 };

    _this.optionRefs = {};
    _this.el = document.createElement('div');
    _this.el.classList.add('react-16-dropdown-portal');
    props.portalClassName && _this.el.classList.add(props.portalClassName);

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.getAlignment = _this.getAlignment.bind(_this);
    _this.setOptionRefs = _this.setOptionRefs.bind(_this);
    _this.getOptions = _this.getOptions.bind(_this);
    _this.getOptionElements = _this.getOptionElements.bind(_this);
    return _this;
  }

  _createClass(MenuPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.querySelector(this.props.menuPortalTarget).appendChild(this.el);

      this.props.controlled && this.props.focused && this.optionRefs[this.props.focused].focus();

      if (!this.props.controlled || this.props.autoFocusMenu) {
        this.props.menuRef.current.focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var options = this.getOptions();

      var key = void 0;

      if (!this.props.controlled) {
        var selected = options[this.state.focused];

        key = selected && selected.value;
      } else {
        key = this.props.focused;
      }

      key && this.optionRefs[key].focus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.querySelector(this.props.menuPortalTarget).removeChild(this.el);
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
    key: 'getOptions',
    value: function getOptions() {
      var _props = this.props,
          options = _props.options,
          sections = _props.sections;


      if (sections.length) {
        return sections.reduce(function (res, sec) {
          return res.concat(sec.options);
        }, []);
      }

      return options;
    }
  }, {
    key: 'getOptionElements',
    value: function getOptionElements() {
      var _this2 = this;

      var sections = this.props.sections;

      var options = this.getOptions();
      var OptionElement = this.props.optionComponent;
      var SectionRenderer = this.props.menuSectionRenderer;
      var focused = this.props.controlled ? options.map(function (o) {
        return o.value;
      }).indexOf(this.props.focused) : this.state.focused;

      if (sections.length) {
        return sections.map(function (sec, i) {
          return _react2.default.createElement(
            SectionRenderer,
            _extends({}, sec, {
              key: sec.id
            }),
            sec.options.map(function (option, j) {
              return _react2.default.createElement(OptionElement, {
                className: option.className,
                data: option,
                focused: focused === i * (i + 1) + j,
                key: option.value,
                optionRef: function optionRef(node) {
                  return _this2.setOptionRefs(node, option.value);
                },
                renderer: _this2.props.optionRenderer,
                onClick: function onClick() {
                  _this2.props.onClick(option);
                }
              });
            })
          );
        });
      }

      return options.map(function (option, i) {
        return _react2.default.createElement(OptionElement, {
          className: option.className,
          data: option,
          focused: focused === i,
          key: option.value,
          optionRef: function optionRef(node) {
            return _this2.setOptionRefs(node, option.value);
          },
          renderer: _this2.props.optionRenderer,
          onClick: function onClick() {
            _this2.props.onClick(option);
          }
        });
      });
    }
  }, {
    key: 'setOptionRefs',
    value: function setOptionRefs(node, key) {
      node && (this.optionRefs[key] = node);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      typeof this.props.onMenuKeyDown === 'function' && this.props.onMenuKeyDown(e);

      if (this.props.controlled) {
        return;
      }

      var options = this.getOptions();
      var maxFocus = options.length - 1;
      var focusedOption = options[this.state.focused];

      // NOTE: This method is called when the menu is
      // opened with the keyboard. This case handles it
      if (e.key === 'Enter' && focusedOption && !focusedOption.disabled) {
        this.props.onClick(focusedOption.value);
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

      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var MenuElement = this.props.menuComponent;

      var menu = _react2.default.createElement(
        MenuElement,
        {
          menuRef: this.props.menuRef,
          renderer: this.props.menuRenderer,
          style: this.getAlignment(),
          onKeyDown: this.handleKeyDown
        },
        this.getOptionElements()
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
  menuRenderer: MenuRenderer,
  menuSectionRenderer: MenuSectionRenderer,
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

exports.OptionRenderer = OptionRenderer;
exports.default = Option;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default renderer for option. Renders a div with
 * child as label.
 *
 * @param {Object} props - React props
 * @param {String} props.className - Custom class
 * @param {Boolean} props.focused - Is focused?
 * @param {String|ReactElement} props.label - Option label
 * @returns {ReactElement}
 */
function OptionRenderer(props) {
  var classes = 'option' + (props.focused ? ' focused' : '') + (props.disabled ? ' disabled' : '') + (props.className ? ' ' + props.className : '');

  return _react2.default.createElement(
    'div',
    { className: classes },
    props.label
  );
}

/**
 * Default option component. It renders a div with
 * renderer as a child.
 *
 * @param {Object} props - React props
 * @param {Boolean} props.focused - Is option focused?
 * @param {ReactRef} props.optionRef - React ref for option
 * @param {Function} props.onClick - Click handler
 * @param {Object} props.data - Option data
 * @param {String} props.className - Custom class
 * @returns {ReactElement}
 */
function Option(props) {
  var Renderer = props.renderer;

  return _react2.default.createElement(
    'div',
    {
      'aria-selected': props.focused,
      role: 'option',
      tabIndex: -1,
      ref: props.optionRef,
      onClick: props.data.disabled ? undefined : props.onClick
    },
    _react2.default.createElement(Renderer, _extends({}, props.data, {
      className: props.className,
      focused: props.focused
    }))
  );
}

Option.defaultProps = {
  renderer: OptionRenderer,
  data: {}
};

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

/**
 * Default trigger renderer - Displays a plain button
 * with label
 *
 * @param {Object} props - React props
 * @param {Boolean} props.disabled - Trigger disabled
 * @param {String|ReactElement} props.label - Trigger display label
 */
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

/**
 * Default trigger component - Renders a div with
 * all the handlers
 *
 * @param {Object} props - React props
 * @param {ReactElement} [props.renderer] - Custom trigger renderer
 * @param {ReactRef} props.triggerRef - React ref for trigger
 * @param {Function} props.onClick - Click handler
 * @param {Function} props.onKeyDown - Key down handler
 * @param {Boolean} props.disabled - Trigger disabled
 * @param {String|ReactElement} props.label - Trigger display label
 */
function Trigger(props) {
  var Renderer = props.renderer || TriggerRenderer;

  return _react2.default.createElement(
    'div',
    {
      className: 'trigger',
      ref: props.triggerRef,
      role: 'button',
      onClick: props.onClick,
      onKeyDown: props.onKeyDown
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