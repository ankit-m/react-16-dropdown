import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import Dropdown from 'react-16-dropdown';

function Jumbotron () {
  const options = [
    {
      label: 'Inception',
      value: 'inception',
    },
    {
      label: 'Prestige',
      value: 'prestige'
    },
    {
      label: 'Dunkirk',
      value: 'dunkirk'
    }
  ];

  return (
    <div className='jumbotron jumbotron-fluid bg-dark text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1>react 16 dropdown</h1>
            <p className='text-secondary'>Zero-dependency, lightweight and fully cuztomizable dropdown (not select) for React.</p>
            <code>npm install --save react-16-dropdown</code>
          </div>
          <div className='col-md-6'>
            <Dropdown
              className='jumbotron-dropdown'
              align='right'
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Basic usage
// Customization
// Controlled component
// Coming soon ...
  // Multilevel dropdown
  // Sections

function Features() {
  return (
    <section className='bg-light py-4'>
      <div className='container'>
        <h2>Features</h2>
        <ul>
          <li>Light weight</li>
          <li>Keyboard support</li>
          <li>Focus management</li>
          <li>Fully customizable</li>
        </ul>
      </div>
    </section>
  );
}

function BasicUsage() {
  const movieOptions = [{
    label: 'Prestige 🎩',
    value: 'prestige',
  }, {
    label: 'Inception 😴',
    value: 'inception'
  }];
  const fruitOptions = [{
    label: 'Banana 🍌',
    value: 'banana',
  }, {
    label: 'Apple 🍎',
    value: 'apple',
  }, {
    label: 'Watermelon 🍉',
    value: 'watermelon',
  }];
  const vehicleOptions = [{
    label: 'Car 🚗',
    value: 'car',
  }, {
    label: 'Truck 🚛',
    value: 'truck',
  }];

  return (
    <section className='py-4 usage-section'>
      <div className='container'>
        <h2>Basic Usage</h2>
        <p>
          To get started with dropdown, all you need to pass is
          an <code>options</code> array and <code>onClick</code> function.
        </p>
        <div className='my-4'>
          <Dropdown
            align='left'
            className='custom-classname'
            closeOnEscape
            options={movieOptions}
            triggerLabel='Movies 🍿'
            onClick={e => console.log(e)}
          />
          <Dropdown
            className='ml-2'
            options={fruitOptions}
            triggerLabel='Fruits 🍇'
            onClick={(e) => { console.log(e); }}
          />
          <Dropdown
            align='right'
            className='ml-2'
            options={vehicleOptions}
            triggerLabel='Vehicles 🚖'
            onClick={(e) => { console.log(e); }}
          />
        </div>

        <pre>
          <code className='language-jsx'>
            {
`const options = [{
  label: 'Prestige 🎩',
  value: 'prestige',
}, {
  label: 'Inception 😴',
  value: 'inception',
}];

<Dropdown
  align='left'
  className='custom-classname'
  closeOnEscape={true}
  options={options}
  triggerLabel='Movies 🍿'
  onClick={val => console.log(val)}
/>`
            }
          </code>
        </pre>
      </div>
    </section>
  );
}

function Customization() {
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
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <h4>Using renderers</h4>
        <p>Buttons</p>
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
        <p>Components</p>

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

function Controlled() {
  const fruitOptions = [{
    label: 'Orange 🍊',
    value: 'orange',
  }, {
    label: 'Green Apple 🍏',
    value: 'green-apple',
  }];

  return (
    <section className='py-4'>
      <div className='container'>
        <h2>Controlled Component</h2>
        <p>
          There may be cases where you might want to use the dropdown as a
          controlled component. ...
        </p>

        <div className='my-4'>
          <Dropdown
            open
            className='mb-5'
            options={fruitOptions}
            triggerLabel='Controlled fruits dropdown 🍓'
            onClick={(e) => { console.log(e); }}
          />
          <br />
          <br />
          <br />
        </div>

        <pre>
          <code className='language-jsx'>
            {
`// Custom trigger component
<Dropdown
  open
  options={[ ... ]}
  triggerLabel='Controlled fruits dropdown 🍓'
  onClick={e => console.log(e)}
/>`
            }
          </code>
        </pre>
      </div>
    </section>
  );
}

function App() {
  return (
    <Fragment>
      <Jumbotron />
      <Features />
      <BasicUsage />
      <Customization />
      <Controlled />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('react-app'));
