import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount () {
    document.body.appendChild(this.el);

    this.node.focus();
  }

  componentWillUnmount () {
    document.body.removeChild(this.el);
  }

  setRef (node) {
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

  render () {
    const Option = this.props.optionRenderer || DefaultOption,
      Menu = this.props.menuRenderer || DefaultMenu;

    const menu = (
      <Menu
        menuRef={this.setRef}
        onKeyUp={this.handleKeyUp}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.options.map((e, i) => {
          return (
            <Option
              focused={this.state.focused === i}
              key={e.value}
              label={e.label}
              onClick={() => { this.props.onClick(e.value); }}
              onMouseOver={() => { this.setState({ focused: i }); }}
            />
          );
        })}
      </Menu>
    );

    return ReactDOM.createPortal(menu, this.el);
  }
}

function DefaultMenu (props) {
  return (
    <div
      role='listbox'
      className='menu'
      tabIndex={-1}
      ref={props.menuRef}
      onKeyUp={props.onKeyUp}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </div>
  );
}

function DefaultOption (props) {
  return (
    <div
      role='option'
      className={`item${props.focused ? ' focused' : ''}`}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
    >
      {props.label}
    </div>
  );
}
