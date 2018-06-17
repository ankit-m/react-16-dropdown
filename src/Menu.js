import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Option, { OptionRenderer } from './Option';

function MenuRenderer(props) {
  return props.children;
}

function Menu(props) {
  const Renderer = props.renderer;

  return (
    <div
      className='menu'
      role='listbox'
      ref={props.menuRef}
      tabIndex={-1}
      style={props.style}
      onKeyDown={props.onKeyDown}
    >
      <Renderer>{props.children}</Renderer>
    </div>
  );
}

/**
 * Managing focus
 *
 * @help https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex
 */
export default class MenuPortal extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: -1 };

    this.el = document.createElement('div');
    this.el.classList.add('react-16-dropdown-portal');
    this.props.portalClassName && this.el.classList.add(this.props.portalClassName);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getAlignment = this.getAlignment.bind(this);
  }

  componentDidMount() {
    document.querySelector(this.props.menuPortalTarget).appendChild(this.el);

    this.props.menuRef.current.focus();
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  getAlignment() {
    // @todo allow other alignments
    const boundingRect = this.props.triggerBoundingRect;
    const top = boundingRect.top + boundingRect.height;

    if (this.props.align === 'left') {
      return {
        top,
        left: boundingRect.left,
      };
    }

    if (this.props.align === 'right') {
      return {
        top,
        right: window.innerWidth - boundingRect.right - window.scrollX,
      };
    }

    return {};
  }

  handleKeyDown(e) {
    const { options } = this.props;
    const maxFocus = options.length - 1;

    // NOTE: This method is called when the menu is
    // opened with the keyboard. This case handles it
    if (e.key === 'Enter' && options[this.state.focused]) {
      this.props.onClick(options[this.state.focused].value);
    } else if (e.key === 'ArrowDown') {
      this.setState(prevState => ({
        focused: prevState.focused < maxFocus ? prevState.focused + 1 : maxFocus,
      }));
    } else if (e.key === 'ArrowUp') {
      this.setState(prevState => ({
        focused: prevState.focused > 0 ? prevState.focused - 1 : 0,
      }));
    }

    return e.preventDefault();
  }

  render() {
    const OptionElement = this.props.optionComponent;
    const MenuElement = this.props.menuComponent;

    const menu = (
      <MenuElement
        menuRef={this.props.menuRef}
        renderer={this.props.menuRenderer}
        style={this.getAlignment()}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.options.map((option, i) => (
          <OptionElement
            className={option.className}
            data={option}
            focused={this.state.focused === i}
            key={option.value}
            renderer={this.props.optionRenderer}
            onClick={() => { this.props.onClick(option); }}
          />
        ))}
      </MenuElement>
    );

    return ReactDOM.createPortal(menu, this.el);
  }
}

MenuPortal.defaultProps = {
  menuComponent: Menu,
  optionComponent: Option,
  optionRenderer: OptionRenderer,
  menuRenderer: MenuRenderer,
  menuPortalTarget: 'body',
};