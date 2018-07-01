import React from 'react';

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

export default function Option(props) {
  const Renderer = props.renderer;

  return (
    <div
      aria-selected={props.focused}
      role='option'
      tabIndex={-1}
      ref={props.optionRef}
      onClick={props.onClick}
    >
      <Renderer
        {...props.data}
        className={props.className}
        focused={props.focused}
      />
    </div>
  );
}

Option.defaultProps = {
  renderer: OptionRenderer,
  data: {},
};
