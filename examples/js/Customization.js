import React from 'react';

import Dropdown from 'react-16-dropdown';

export default function Customization() {
  const options = [{
    label: 'Inception',
    value: 'inception',
  }, {
    label: 'Prestige',
    value: 'prestige',
  }];
  const colorOptions = [{
    label: 'Primary',
    value: 'primary',
  }, {
    label: 'Success',
    value: 'success',
  }, {
    label: 'Danger',
    value: 'danger',
  }];

  return (
    <section className='bg-light py-4'>
      <div className='container'>
        <h2>Customization</h2>
        <p>
          You can customize the dropdown to suit your needs. There are three
          options to do this:
        </p>
        <ul>
          <li>
            Append styles to existing classes - <code>trigger</code>,
            &nbsp;<code>menu</code> and <code>option</code>
          </li>
          <li>Use your own renderers</li>
          <li>Replace default components with your own custom components</li>
        </ul>

        <h4>Using renderers</h4>
        <p>
          In most cases using custom renderers should suffice. You just have
          pass a presentational component in <code>triggerRenderer</code>,
          &nbsp;<code>menuRenderer</code> or <code>optionRenderer</code>.
          These components will receive basic props.
        </p>
        <div className='my-4'>
          <Dropdown
            options={options}
            triggerRenderer={() => <button className='btn btn-success'>Trigger renderer</button>}
            onClick={e => console.log(e)}
          />

          <Dropdown
            options={colorOptions}
            triggerRenderer={() => <button className='btn btn-dark ml-2'>Option renderer</button>}
            optionRenderer={props => <div className={`option option--${props.value}`}>{props.label}</div>}
            onClick={e => console.log(e)}
          />
        </div>
        <pre>
          <code className='language-jsx'>
            {
`// Custom trigger renderer
<Dropdown
  options={[ ... ]}
  triggerRenderer={() => <button className='btn btn-success'>Trigger renderer</button>}
  onClick={e => console.log(e)}
/>

// Custom option renderer
<Dropdown
  options={colorOptions}
  triggerRenderer={() => <button className='btn btn-dark ml-2'>Option renderer</button>}
  optionRenderer={props => <div className={\`option option--\${props.value}\`}>{props.label}</div>}
  onClick={e => console.log(e)}
/>`
            }
          </code>
        </pre>

        <h4 className='mt-4'>Replacing components</h4>
        <p>
          In some cases, you might want to replace the default components. The component
          will be passed all props (including refs and event handlers). You should apply
          the appropriate props for correct functionality.
        </p>

        <div className='my-4'>
          <Dropdown
            options={options}
            triggerComponent={props => (
              <a className='btn btn-outline-info' ref={props.triggerRef} onClick={props.onClick} onKeyDown={props.onKeyDown}>
                Custom link component
              </a>
            )}
            onClick={e => console.log(e)}
          />

          <Dropdown
            className='custom-option'
            options={colorOptions}
            triggerLabel='Custom option component'
            optionComponent={props => (
              <div
                className={`option ${props.focused ? 'focused' : ''}`}
                ref={props.optionRef}
                onClick={props.onClick}
              >
                {props.data.label}
              </div>
            )}
            onClick={e => console.log(e)}
          />
        </div>
        <pre>
          <code className='language-jsx'>
            {
`// Custom trigger component
<Dropdown
  options={options}
  triggerComponent={props => (
    <a className='btn btn-outline-info' ref={props.triggerRef} onClick={props.onClick} onKeyDown={props.onKeyDown}>
      Custom link component
    </a>
  )}
  onClick={e => console.log(e)}
/>

// Custom option component
<Dropdown
  className='custom-option'
  options={colorOptions}
  triggerLabel='Custom option component'
  optionComponent={props => (
    <div
      className={\`option \${props.focused ? 'focused' : ''}\`}
      ref={props.optionRef}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  )}
  onClick={e => console.log(e)}
/>`
            }
          </code>
        </pre>
      </div>
    </section>
  );
}