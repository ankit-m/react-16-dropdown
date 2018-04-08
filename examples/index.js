import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

import Dropdown from 'react-16-dropdown';

function App () {
  const options = [
    {
      label: 'Inception',
      value: 'inception'
    },
    {
      label: 'Prestige',
      value: 'prestige'
    }
  ];

  // buttonRenderer
  // menuRenderer
  // optionRenderer
  return (
    <Fragment>
      <Dropdown
        options={options}
        value='inception'
        onClick={e => console.log(e)}
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