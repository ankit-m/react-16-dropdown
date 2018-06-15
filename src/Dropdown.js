import React, { Component } from 'react';

import Menu from './Menu';
import { getAbsoluteBoundingRect, optimizedResize } from './utils';

function TriggerRenderer(props) {
  return (
    <button disabled={props.disabled}>
      {props.label}
    </button>
  );
}

function Trigger(props) {
  const Renderer = props.renderer;

  return (
    <div
      className='trigger'
      disabled={props.disabled}
      ref={props.triggerRef}
      role='button'
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
    >
      <Renderer
        disabled={props.disabled}
        label={props.label}
      />
    </div>
  );
}

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
  }

  componentDidMount() {
    this.setTriggerRect();

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
    this.setState({
      triggerBoundingRect: getAbsoluteBoundingRect(this.triggerRef.current),
    });
  }

  closeMenu(focus) {
    this.setState({ open: false }, () => {
      focus && this.triggerRef.current.focus();
    });
  }

  openMenu() {
    this.setState({ open: true });
  }

  handleClickOutside(e) {
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
    if (this.controlled) {
      return;
    }

    this.setState(prevState => ({ open: !prevState.open }));
  }

  handleTriggerKeyDown(e) {
    if (this.controlled) {
      return;
    }

    if (e.key === 'ArrowDown') {
      this.openMenu();

      e.preventDefault();
    }
  }

  handleOptionClick(val) {
    this.props.onClick(val);
    !this.controlled && this.props.closeOnOptionClick && this.closeMenu(true);
  }

  render() {
    const TriggerElement = this.props.triggerComponent;
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
  triggerComponent: Trigger,
  triggerRenderer: TriggerRenderer,
  triggerLabel: 'Open menu',
  closeOnEscape: true,
  closeOnClickOutside: true,
  closeOnOptionClick: false,
  disabled: false,
  align: 'left',
};
