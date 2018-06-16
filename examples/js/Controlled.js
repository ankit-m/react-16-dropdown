import React from 'react';

import Dropdown from 'react-16-dropdown';

export default function Controlled() {
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
          By default, the dropdown ships a controlled component.
          There may be cases where you might want to use it as a controlled
          component. You can pass props <code>open</code>, <code>onTriggerClick</code>, etc.
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
