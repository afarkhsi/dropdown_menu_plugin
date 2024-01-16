import React from 'react';
import ReactDOM from 'react-dom/client';
import SelectMenu from './lib/components/SelectInput/SelectInput';
import { option } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectMenu
      options={option}
      placeholder="Select a department"
      // defaultClass="select_menu"
      id="blabla"
      label="select_menu"
    />
  </React.StrictMode>
);
