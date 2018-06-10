import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';

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

function DefaultTriggerRenderer (props) {
  return (
    <button disabled={props.disabled}>
      {props.label}
    </button>
  );
}

function DefaultTriggerComponent (props) {
  const TriggerRenderer = props.renderer;

  return (
    <div
      className='trigger'
      disabled={props.disabled}
      ref={props.triggerRef}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
    >
      <TriggerRenderer
        disabled={props.disabled}
        label={props.label}
      />
    </div>
  );
}

export default class Dropdown extends Component {
  constructor (props) {
    super(props);

    this.state = { open: Boolean(props.open) };

    this.menuRef = React.createRef();
    this.triggerRef = React.createRef();
    this.controlled = this.props.hasOwnProperty('open');

    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleTriggerKeyDown = this.handleTriggerKeyDown.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.setState({ triggerBoundingRect: getAbsoluteBoundingRect(this.triggerRef.current) });
  }

  componentDidUpdate () {
    if (this.controlled) {
      return;
    }

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
      focus && this.triggerRef.current.focus();
    });
  }

  openMenu () {
    this.setState({ open: true });
  }

  handleClickOutside (e) {
    if (!this.menuRef.current.contains(e.target)) {
      this.closeMenu();
    }
  }

  handleEscape (e) {
    if (e.key === 'Escape') {
      this.closeMenu(true);
    }
  }

  handleTriggerClick (e) {
    if (this.controlled) {
      return;
    }

    this.setState((prevState) => {
      return { open: !prevState.open };
    })
  }

  handleTriggerKeyDown (e) {
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

  render () {
    const Trigger = this.props.triggerComponent;
    const open = this.controlled ? this.props.open : this.state.open;
    const classes = 'react-16-dropdown' +
      (this.props.className ? ` ${this.props.className}` : '');

    return (
      <div
        className={classes}
        id={this.props.id}
      >
        <Trigger
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
  triggerComponent: DefaultTriggerComponent,
  triggerRenderer: DefaultTriggerRenderer,
  triggerLabel: 'Open menu',
  closeOnEscape: true,
  closeOnClickOutside: true,
  closeOnOptionClick: false,
  disabled: false,
  align: 'left'
}
