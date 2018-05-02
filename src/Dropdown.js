import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';

function DefaultTrigger (props) {
  return (
    <button
      ref={props.triggerRef}
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

    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleTriggerKeyUp = this.handleTriggerKeyUp.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.setTriggerRef = this.setTriggerRef.bind(this);
  }

  componentDidUpdate () {
    if (this.state.open) {
      this.props.closeOnEscape && document.addEventListener('keyup', this.handleEscape);
      this.props.closeOnClickOutside && document.addEventListener('click', this.handleClickOutside);
    }
    else {
      this.props.closeOnEscape && document.removeEventListener('keyup', this.handleEscape);
      this.props.closeOnClickOutside && document.removeEventListener('click', this.handleClickOutside);
    }
  }

  closeMenu (focus) {
    this.setState({ open: false }, () => {
      focus && this.trigger.focus();
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

  handleTriggerClick (e) {
    this.setState((prevState) => {
      return { open: !prevState.open };
    })
  }

  handleOptionClick (val) {
    this.props.onClick(val);
    this.closeMenu(true);
  }

  handleTriggerKeyUp (e) {
    if (e.key === 'ArrowDown') {
      this.openMenu();
    }
  }

  setMenuRef (node) {
    this.menu = node;
  }

  setTriggerRef (node) {
    this.trigger = node;
  }

  render () {
    const Trigger = this.props.triggerComponent;
    const classes = 'react-16-dropdown' +
      (this.props.className ? ` ${this.props.className}` : '');

    return (
      <div className={classes}>
        <Trigger
          triggerRef={this.setTriggerRef}
          onClick={this.handleTriggerClick}
          onKeyUp={this.handleTriggerKeyUp}
        />
        
        {this.state.open &&
          <Menu
            {...this.props}
            trigger={this.trigger}
            menuRef={this.setMenuRef}
            onClick={this.handleOptionClick}
          />
        }
      </div>
    );
  }
}

Dropdown.defaultProps = {
  triggerComponent: DefaultTrigger,
  closeOnEscape: true,
  closeOnClickOutside: true
}
