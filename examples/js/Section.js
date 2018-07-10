import React from 'react';

import Dropdown from 'react-16-dropdown';

export default function BasicUsage() {
  const movieOptions = [{
    label: 'Prestige 🎩',
    value: 'prestige',
  }, {
    label: 'Inception 😴',
    value: 'inception',
  }];
  const fruitOptions = [{
    label: 'Banana 🍌',
    value: 'banana',
  }, {
    label: 'Watermelon 🍉',
    value: 'watermelon',
  }];
  const sections = [{
    title: 'Movies',
    id: 'movies',
    options: movieOptions,
  }, {
    title: 'Fruits',
    id: 'fruits',
    options: fruitOptions,
  }];

  return (
    <section className='py-4 usage-section'>
      <div className='container'>
        <h2>Sections</h2>
        <p>
          To get started with dropdown, all you need to pass is
          an <code>options</code> array and <code>onClick</code> function.
          Check documentation for all supported props.
        </p>
        <div className='my-4'>
          <Dropdown
            closeOnEscape
            sections={sections}
            triggerLabel='Sections'
            onClick={e => console.log(e)}
          />
        </div>

        <pre>
          <code className='language-jsx'>
            {
`const movieOptions = [{
  label: 'Prestige 🎩',
  value: 'prestige',
}, {
  label: 'Inception 😴',
  value: 'inception',
}];
const fruitOptions = [{
  label: 'Banana 🍌',
  value: 'banana',
}, {
  label: 'Watermelon 🍉',
  value: 'watermelon',
}];
const sections = [{
  title: 'Movies',
  id: 'movies',
  options: movieOptions,
}, {
  title: 'Fruits',
  id: 'fruits',
  options: fruitOptions,
}];

<Dropdown
  closeOnEscape
  sections={sections}
  triggerLabel='Sections'
  onClick={e => console.log(e)}
/>`
            }
          </code>
        </pre>
      </div>
    </section>
  );
}
