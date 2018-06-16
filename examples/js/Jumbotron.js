import React from 'react';

import Dropdown from 'react-16-dropdown';

/**
 * Introductory component
 */
export default function Jumbotron() {
  const options = [{
    label: 'Banana 🍌',
    value: 'banana',
  }, {
    label: 'Apple 🍎',
    value: 'apple',
  }, {
    label: 'Watermelon 🍉',
    value: 'watermelon',
  }];

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
              open
              className='mt-2'
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}