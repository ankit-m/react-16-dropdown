import React, { Component } from 'react';

import Menu from './Menu';
import Trigger from './Trigger';
import { getAbsoluteBoundingRect, optimizedResize } from './utils';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { open: Boolean(props.open) };

    this.menuRef = React.createRef();
    this.triggerRef = React.createRef();
    this.controlled = Object.prototype.hasOwnProperty.call(this.props, 'open');

    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleTriggerKeyDown = this.handleTriggerKeyDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setTriggerRect = this.setTriggerRect.bind(this);
    this.focusTrigger = this.focusTrigger.bind(this);
  }

  componentDidMount() {
    this.setTriggerRect();

    this.props.autoFocus && this.focusTrigger();

    optimizedResize.add(this.setTriggerRect);
  }

  componentDidUpdate(prevProps, prevState) {
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

  setTriggerRect() {
    if (!this.triggerRef.current) {
      return;
    }

    this.setState({
      triggerBoundingRect: getAbsoluteBoundingRect(this.triggerRef.current),
    });
  }

  // focus the custom component passed or renderer
  focusTrigger() {
    if (this.props.triggerComponent) {
      this.triggerRef.current.focus();
    } else {
      this.triggerRef.current.firstChild.focus();
    }
  }

  closeMenu(focus) {
    this.setState({ open: false }, () => {
      focus && this.focusTrigger();
    });
  }

  openMenu() {
    this.setState({ open: true });
  }

  handleClickOutside(e) {
    if (!this.menuRef.current) {
      return;
    }

    if (!this.menuRef.current.contains(e.target)) {
      this.closeMenu();
    }
  }

  handleEscape(e) {
    if (e.key === 'Escape') {
      this.closeMenu(true);
    }
  }

  handleTriggerClick() {
    // re-calculating the position of dropdown to remove scrolling side effects
    this.setTriggerRect();

    typeof this.props.onTriggerClick === 'function' && this.props.onTriggerClick();

    if (this.controlled) {
      return;
    }

    this.setState(prevState => ({ open: !prevState.open }));
  }

  handleTriggerKeyDown(e) {
    typeof this.props.onTriggerKeyDown === 'function' && this.props.onTriggerKeyDown();

    if (this.controlled) {
      return;
    }

    if (e.key === 'ArrowDown') {
      this.openMenu();

      e.preventDefault();
    }
  }

  handleOptionClick(val) {
    typeof this.props.onClick === 'function' && this.props.onClick(val);

    !this.controlled && this.props.closeOnOptionClick && this.closeMenu(true);
  }

  render() {
    const TriggerElement = this.props.triggerComponent || Trigger;
    const open = this.controlled ? this.props.open : this.state.open;
    const classes = 'react-16-dropdown' +
      (this.props.className ? ` ${this.props.className}` : '');

    return (
      <div
        className={classes}
        id={this.props.id}
      >
        <TriggerElement
          disabled={this.props.disabled}
          label={this.props.triggerLabel}
          renderer={this.props.triggerRenderer}
          triggerRef={this.triggerRef}
          onClick={this.handleTriggerClick}
          onKeyDown={this.handleTriggerKeyDown}
        />

        {open && this.state.triggerBoundingRect &&
          <Menu
            {...this.props}
            controlled={this.controlled}
            menuRef={this.menuRef}
            triggerBoundingRect={this.state.triggerBoundingRect}
            onClick={this.handleOptionClick}
          />
        }
      </div>
    );
  }
}

Dropdown.defaultProps = {
  autoFocus: false,
  triggerLabel: 'Open menu',
  closeOnEscape: true,
  closeOnClickOutside: true,
  closeOnOptionClick: false,
  disabled: false,
  align: 'left',
  options: [],
  sections: [],
};
