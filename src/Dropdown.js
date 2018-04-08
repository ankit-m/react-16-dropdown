import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';

function DefaultButton (props) {
  return (
    <button
      ref={props.buttonRef}
      onClick={props.onClick}
      onKeyUp={props.onKeyUp}
    >
      Click me!
    </button>
  );
}

export default class Dropdown extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleButtonKeyUp = this.handleButtonKeyUp.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.setButtonRef = this.setButtonRef.bind(this);
  }

  componentDidUpdate () {
    if (this.state.open) {
      document.addEventListener('keyup', this.handleEscape);
      document.addEventListener('click', this.handleClickOutside);
    }
    else {
      document.removeEventListener('keyup', this.handleEscape);
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

  closeMenu (focus) {
    this.setState({ open: false }, () => {
      focus && this.button.focus();
    });
  }

  openMenu () {
    this.setState({ open: true });
  }

  handleClickOutside (e) {
    if (!this.menu.contains(e.target)) {
      this.closeMenu();
    }
  }

  handleEscape (e) {
    if (e.key === 'Escape') {
      this.closeMenu(true);
    }
  }

  handleButtonClick (e) {
    this.setState((prevState) => {
      return { open: !prevState.open };
    })
  }

  handleOptionClick (val) {
    this.props.onClick(val);
    this.closeMenu(true);
  }

  handleButtonKeyUp (e) {
    if (e.key === 'ArrowDown') {
      this.openMenu();
    }
  }

  setMenuRef (node) {
    this.menu = node;
  }

  setButtonRef (node) {
    this.button = node;
  }

  render () {
    const Button = this.props.buttonComponent;

    return (
      <Fragment>
        <Button
          buttonRef={this.setButtonRef}
          onClick={this.handleButtonClick}
          onKeyUp={this.handleButtonKeyUp}
        />
        
        {this.state.open &&
          <Menu
            {...this.props}
            menuRef={this.setMenuRef}
            onClick={this.handleOptionClick}
          />
        }
      </Fragment>
    );
  }
}

Dropdown.defaultProps = {
  buttonComponent: DefaultButton
}
