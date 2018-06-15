import React, { PureComponent } from 'react';

export function OptionRenderer(props) {
  return (
    <div className={props.className}>
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

    const classes = 'option' +
      (this.props.focused ? ' focused' : '') +
      (this.props.className ? ` ${this.props.className}` : '');

    return (
      <div
        aria-selected={this.props.focused}
        role='option'
        tabIndex={-1}
        ref={this.optionRef}
        onClick={this.props.onClick}
      >
        <Renderer
          className={classes}
          label={this.props.label}
          value={this.props.value}
        />
      </div>
    );
  }
}

