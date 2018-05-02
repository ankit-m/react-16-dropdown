import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function DefaultMenu (props) {
  return (
    <div
      role='listbox'
      className='menu'
      ref={props.menuRef}
      tabIndex={-1}
      style={props.style}
      onKeyUp={props.onKeyUp}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </div>
  );
}

function DefaultOption (props) {
  const classes = 'item' +
    (props.focused ? ' focused': '') +
    (props.className ? ` ${props.className}` : '');

  return (
    <div
      role='option'
      className={classes}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >
      {props.label}
    </div>
  );
}

function getAbsoluteBoundingRect (el) {
  let rect = {};
  let clientRect = el.getBoundingClientRect();

  rect.left = window.scrollX + clientRect.left;
  rect.top = window.scrollY + clientRect.top;
  rect.right = clientRect.right;
  rect.bottom = clientRect.bottom;
  rect.height = clientRect.height;

  return rect;
}

/**
 * Managing focus
 *
 * @help https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex
 */
export default class Menu extends Component {
  constructor (props) {
    super(props);

    this.state = { focused: -1 };
    // @todo add class
    this.el = document.createElement('div');
    this.boundingRect = getAbsoluteBoundingRect(this.props.trigger);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.getAlignment = this.getAlignment.bind(this);
  }

  componentDidMount () {
    document.body.appendChild(this.el);

    this.node.focus();
  }

  componentWillUnmount () {
    document.body.removeChild(this.el);
  }

  setMenuRef (node) {
    this.node = node;

    this.props.menuRef(node);
  }

  handleKeyDown (e) {
    if (e.key === 'Tab') {
      // prevent blur from Tab key (only escape allowed)
      e.preventDefault();
    }
  }

  handleKeyUp (e) {
    const options = this.props.options;
    const maxFocus = options.length - 1;

    // NOTE: This method is called when the menu is
    // opened with the keyboard. This case handles it
    if (e.key === 'Enter' && options[this.state.focused]) {
      this.props.onClick(options[this.state.focused].value);
    }
    else if (e.key === 'ArrowDown') {
      this.setState((prevState) => {
        return { focused: prevState.focused < maxFocus ? prevState.focused + 1 : maxFocus };
      })
    }
    else if (e.key === 'ArrowUp') {
      this.setState((prevState) => {
        return { focused: prevState.focused > 0 ? prevState.focused - 1 : 0 };
      });
    }
  }

  getAlignment () {
    // @todo allow other alignments
    const top = this.boundingRect.top + this.boundingRect.height;

    if (this.props.align === 'left') {
      return {
        top,
        left: this.boundingRect.left
      };
    }

    if (this.props.align === 'right') {
      return {
        top,
        right: window.innerWidth - this.boundingRect.right - window.scrollX
      };
    }

    return {};
  }

  render () {
    const Option = this.props.optionComponent;
    const Menu = this.props.menuComponent;
    const styles = this.getAlignment();

    const menu = (
      <Menu
        menuRef={this.setMenuRef}
        style={styles}
        onKeyUp={this.handleKeyUp}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.options.map((option, i) => {
          return (
            <Option
              className={option.className}
              focused={this.state.focused === i}
              key={option.value}
              label={option.label}
              onClick={() => { this.props.onClick(option.value); }}
              onMouseOver={() => { this.setState({ focused: i }); }}
            />
          );
        })}
      </Menu>
    );

    return ReactDOM.createPortal(menu, this.el);
  }
}

Menu.defaultProps = {
  menuComponent: DefaultMenu,
  optionComponent: DefaultOption
}
