# Dropdown-component-library

Library of React components created using `create-react-app`.

## Prerequisites :

- [Node.js](https://nodejs.org/en/)
- `Npm` or `Yarn`
- `Visual studio` code or similare

## Description:

A simple React dropdown menu component

## Installation:

### Package installation

Run the followings commands with npm or yarn:

    $ npm install dropdown-component-library-afarkhsi
    $ yarn add dropdown-component-library-afarkhsi

### Import the dropdown menu

```jsx
import { DropdownMenu } from 'dropdown-component-library-afarkhsi';
```

### Simple example of using:

To define the possible options on your dropdown menu you can pass an array with `value` and `label` keys.

```jsx
import React from 'react';
//import the dropdown menu component
import { DropdownMenu } from 'dropdown-component-library-afarkhsi';

function DropDown() {
  const optionsExample = [
    { label: 'Paris', value: 'paris' },
    { label: 'Lille', value: 'lille' },
    { label: 'Lyon', value: 'lyon' },
    { label: 'Bordeaux', value: 'bordeaux' },
    { label: 'Marseille', value: 'marseille' },
    { label: 'Reims', value: 'reims' },
  ];

  return <DropdownMenu options={optionsExample} />;
}

export default DropDown;
```

### Props

|      Prop      |   Type   |               Description                |
| :------------: | :------: | :--------------------------------------: |
|   `options`    | `Array`  |       Define the dropdown options        |
|      `id`      | `string` |         Define the component id          |
|    `label`     | `string` |        Define the component label        |
| `placeholder`  | `string` | Define the placeholder of the component  |
| `defaultValue` | `string` | Define the defaultValue of the component |
|     `name`     | `string` |     Define the name of the component     |

### EventListener option

If you need to retrieve the data displayed on the click menu you must add these lines of code and set your state in your function before calling the 'dropdownEvent' listener with your function as a second parameter.

Example :

```jsx
const [data, setData] = useState();
// Enclosing application
function myFunction(event: any) {
  // retrieve the object from the event
  const objet = event.detail;
  // Manipulate the object in the enclosing application
  setData(objet);
}

// Adding the event listener dropdownEvent
window.addEventListener('dropdownEvent', myFunction);
```
