import React from 'react';

import Dropdown from 'react-16-dropdown';

export default function BasicUsage() {
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
          Check documentation for all supported props.
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
