# Select-component-library library of React components created using `create-react-app`.

## Description:

A simple React dropdown menu component

## Installation:

### Package installation

Run the followings commands:
`npm install dropdown-component-library`
or
`yarn add dropdown-component-library`

### Import the dropdown menu

### Simple example of using:

To define the possible options on your dropdown menu you can pass an array with `value` and `label` keys.

```jsx
import React from 'react';
//import the dropdown menu component
import SelectMenu from 'select-component-library';

function DropDown(){

    const optionsExample = [
        { label: 'Paris', value: 'paris'},
        { label: 'Lille', value: 'lille'},
        { label: 'Lyon', value: 'lyon'}
        { label: 'Bordeaux', value: 'bordeaux'},
        { label: 'Marseille', value: 'marseille'},
        { label: 'Reims', value: 'reims'}
   ];

    return (
        <DropdownMenu
        options={optionsExample}
        />
    );
}

export default DropDown;
```

### Props
