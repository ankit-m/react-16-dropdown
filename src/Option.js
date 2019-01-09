import React from 'react';

/**
 * Default renderer for option. Renders a div with
 * child as label.
 *
 * @param {Object} props - React props
 * @param {String} props.className - Custom class
 * @param {Boolean} props.focused - Is focused?
 * @param {String|ReactElement} props.label - Option label
 * @returns {ReactElement}
 */
export function OptionRenderer(props) {
  const classes = 'option' +
      (props.focused ? ' focused' : '') +
      (props.disabled ? ' disabled' : '') +
      (props.className ? ` ${props.className}` : '');

  return (
    <div className={classes}>
      {props.label}
    </div>
  );
}

/**
 * Default option component. It renders a div with
 * renderer as a child.
 *
 * @param {Object} props - React props
 * @param {Boolean} props.focused - Is option focused?
 * @param {ReactRef} props.optionRef - React ref for option
 * @param {Function} props.onClick - Click handler
 * @param {Object} props.data - Option data
 * @param {String} props.className - Custom class
 * @returns {ReactElement}
 */
export default function Option(props) {
  const Renderer = props.renderer;

  return (
    <div
      aria-selected={props.focused}
      role='option'
      tabIndex={-1}
      ref={props.optionRef}
      onClick={props.data.disabled ? undefined : props.onClick}
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
