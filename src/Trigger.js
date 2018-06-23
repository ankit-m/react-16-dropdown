import React from 'react';

export function TriggerRenderer(props) {
  return (
    <button
      className='trigger-renderer'
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

export default function Trigger(props) {
  const Renderer = props.renderer || TriggerRenderer;

  return (
    <div
      className='trigger'
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
