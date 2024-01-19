import React from 'react';
import ReactDOM from 'react-dom/client';
import DropdownMenu from './lib/components/DropdownMenu/DropdownMenu';
import { states } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <label>Select a city</label>
    <DropdownMenu
      options={states}
      placeholder="Select a department"
      id="states"
      label="select_menu"
    />
  </React.StrictMode>
);
