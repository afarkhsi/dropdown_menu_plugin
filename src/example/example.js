import React from 'react';
import ReactDOM from 'react-dom/client';
import DropdownMenu from 'select-component-library';

//Your data formated with a label and a value key
const data = [
  { label: 'Paris', value: 'paris' },
  { label: 'Lille', value: 'lille' },
  { label: 'Lyon', value: 'lyon' },
  { label: 'Bordeaux', value: 'bordeaux' },
  { label: 'Marseille', value: 'marseille' },
  { label: 'Reims', value: 'reims' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <label>Select your city</label>
    <DropdownMenu
      options={data}
      placeholder="Select an option"
      id="example"
      label="dropdown_menu"
    />
  </React.StrictMode>
);
