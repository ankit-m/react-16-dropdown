import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import Dropdown from 'react-16-dropdown';

function App () {
  const options = [
    {
      label: 'Inception',
      value: 'inception',
      className: 'inception'
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

  // buttonRenderer
  // menuRenderer
  // optionRenderer
  return (
    <Fragment>
      <Dropdown
        id='someid'
        align='left'
        className='custom-class'
        options={options}
        onClick={e => console.log(e)}
        onClose={() => console.log('closed')}
      />
      <select>
        {options.map((o) => {
          return <option key={o.value}>{o.label}</option>
        })}
      </select>
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('react-app'))