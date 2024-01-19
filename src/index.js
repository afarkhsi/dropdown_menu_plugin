import React from 'react';
import ReactDOM from 'react-dom/client';
import SelectMenu from './lib/components/DropdownMenu/DropdownMenu';
import { option, states } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectMenu
      options={states}
      placeholder="Select a department"
      id="blabla"
      label="select_menu"
    />
  </React.StrictMode>
);
