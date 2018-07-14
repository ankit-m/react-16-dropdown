import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Option from './Option';

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
function MenuSection(props) {
  return (
    <div className='menu-section'>
      <div className='menu-section__title'>{props.title}</div>
      <div className='menu-section__body'>
        {props.children}
      </div>
    </div>
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
 * Portal for the menu
 *
 * @help https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex
 */
export default class MenuPortal extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: -1 };

    this.optionRefs = {};
    this.el = document.createElement('div');
    this.el.classList.add('react-16-dropdown-portal');
    props.portalClassName && this.el.classList.add(props.portalClassName);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getAlignment = this.getAlignment.bind(this);
    this.setOptionRefs = this.setOptionRefs.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.getOptionElements = this.getOptionElements.bind(this);
  }

  componentDidMount() {
    document.querySelector(this.props.menuPortalTarget).appendChild(this.el);

    this.props.controlled && this.props.focused && this.optionRefs[this.props.focused].focus();

    if (!this.props.controlled || this.props.autoFocusMenu) {
      this.props.menuRef.current.focus();
    }
  }

  componentDidUpdate() {
    const options = this.getOptions();

    let key;

    if (!this.props.controlled) {
      const selected = options[this.state.focused];

      key = selected && selected.value;
    } else {
      key = this.props.focused;
    }

    key && this.optionRefs[key].focus();
  }

  componentWillUnmount() {
    document.querySelector(this.props.menuPortalTarget).removeChild(this.el);
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

  getOptions() {
    const { options, sections } = this.props;

    if (sections.length) {
      return sections.reduce((res, sec) => res.concat(sec.options), []);
    }

    return options;
  }

  getOptionElements() {
    const { sections } = this.props;
    const options = this.getOptions();
    const OptionElement = this.props.optionComponent;
    const focused = this.props.controlled ?
      options.map(o => o.value).indexOf(this.props.focused) :
      this.state.focused;

    if (sections.length) {
      return sections.map((sec, i) => (
        <MenuSection
          key={sec.id}
          title={sec.title}
        >
          {sec.options.map((option, j) => (
            <OptionElement
              className={option.className}
              data={option}
              focused={focused === (i * (i + 1)) + j}
              key={option.value}
              optionRef={node => this.setOptionRefs(node, option.value)}
              renderer={this.props.optionRenderer}
              onClick={() => { this.props.onClick(option); }}
            />
          ))}
        </MenuSection>
      ));
    }

    return options.map((option, i) => (
      <OptionElement
        className={option.className}
        data={option}
        focused={focused === i}
        key={option.value}
        optionRef={node => this.setOptionRefs(node, option.value)}
        renderer={this.props.optionRenderer}
        onClick={() => { this.props.onClick(option); }}
      />
    ));
  }

  setOptionRefs(node, key) {
    node && (this.optionRefs[key] = node);
  }

  handleKeyDown(e) {
    typeof this.props.onMenuKeyDown === 'function' && this.props.onMenuKeyDown(e);

    if (this.props.controlled) {
      return;
    }

    const options = this.getOptions();
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

    e.preventDefault();
  }

  render() {
    const MenuElement = this.props.menuComponent;

    const menu = (
      <MenuElement
        menuRef={this.props.menuRef}
        renderer={this.props.menuRenderer}
        style={this.getAlignment()}
        onKeyDown={this.handleKeyDown}
      >
        {this.getOptionElements()}
      </MenuElement>
    );

    return ReactDOM.createPortal(menu, this.el);
  }
}

MenuPortal.defaultProps = {
  menuComponent: Menu,
  optionComponent: Option,
  menuRenderer: MenuRenderer,
  menuPortalTarget: 'body',
};
