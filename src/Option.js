import React, { PureComponent } from 'react';

export function OptionRenderer(props) {
  const classes = 'option' +
      (props.focused ? ' focused' : '') +
      (props.className ? ` ${props.className}` : '');

  return (
    <div className={classes}>
      {props.label}
    </div>
  );
}

export default class Option extends PureComponent {
  constructor(props) {
    super(props);

    this.optionRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.focused !== prevProps.focused && this.props.focused) {
      this.optionRef.current.focus();
    }
  }

  render() {
    const Renderer = this.props.renderer;

    return (
      <div
        aria-selected={this.props.focused}
        role='option'
        tabIndex={-1}
        ref={this.optionRef}
        onClick={this.props.onClick}
      >
        <Renderer
          {...this.props.data}
          className={this.props.className}
          focused={this.props.focused}
        />
      </div>
    );
  }
}

