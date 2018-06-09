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

class DefaultOption extends React.PureComponent {
  constructor (props) {
    super(props);

    this.optionRef = React.createRef();
  }

  componentDidUpdate (prevProps) {
    if (this.props.focused !== prevProps.focused && this.props.focused) {
      this.optionRef.current.focus()
    }
  }

  render () {
    const classes = 'item' +
      (this.props.focused ? ' focused': '') +
      (this.props.className ? ` ${this.props.className}` : '');

    return (
      <div
        role='option'
        className={classes}
        tabIndex={-1}
        ref={this.optionRef}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </div>
  );
  }
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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getAlignment = this.getAlignment.bind(this);
  }

  componentDidMount () {
    document.body.appendChild(this.el);

    this.props.menuRef.current.focus();
  }

  componentWillUnmount () {
    document.body.removeChild(this.el);
  }

  handleKeyDown (e) {
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

    return e.preventDefault();
  }

  getAlignment () {
    // @todo allow other alignments
    const boundingRect = this.props.triggerBoundingRect,
      top = boundingRect.top + boundingRect.height;

    if (this.props.align === 'left') {
      return {
        top,
        left: boundingRect.left
      };
    }

    if (this.props.align === 'right') {
      return {
        top,
        right: window.innerWidth - boundingRect.right - window.scrollX
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
        menuRef={this.props.menuRef}
        style={styles}
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
