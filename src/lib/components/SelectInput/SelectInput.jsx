import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const SelectInput = ({ id, options, reset, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelected(null);
  }, [reset]);

  return (
    <div
      ref={dropdownRef}
      className="select-menu"
      aria-label="toggle select"
      id={id}
      label={label}
    >
      <button
        {...(isOpen
          ? { className: 'select-menu_selected_open ' }
          : { className: 'select-menu_selected' })}
        aria-label="select menu selected"
        onClick={toggleSelect}
        tabIndex="0"
      >
        <span className="select-menu_selected_text">
          {selected ? selected : placeholder}
        </span>
      </button>
      {isOpen ? (
        <ul
          className="select-menu_list"
          role="listbox"
          aria-label="select menu options"
          aria-expanded={isOpen}
        >
          {options.map((item) => (
            <li
              key={item.label}
              onClick={() => handleOnClick(item?.value)}
              tabIndex={isOpen ? '0' : '-1'}
              aria-label={item.value}
              className="select-menu_list_item"
              data-selected={selected === item}
            >
              <p>{item.value}</p>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};
export default SelectInput;

// //BASIC
// const SelectInput = ({
//   width,
//   height,
//   id,
//   label,
//   options,
//   defaultClass,
//   placeholder,
// }) => {
//   const [value, setValue] = useState('');

//   const handleSelect = (e) => {
//     const target = e.target.value;
//     setValue(target);
//   };

//   // const toggleSelect = () => {
//   //   setValue(value);
//   //   console.log(value);
//   // };

//   return (
//     <select
//       id={id}
//       className={defaultClass}
//       onChange={handleSelect}
//       width={width}
//       height={height}
//       label={label}
//     >
//       <option value="" disabled selected>
//         {placeholder}
//       </option>
//       {options.map((option) => (
//         <option
//           label={option.label}
//           id={option.id}
//           className="select_menu_item"
//           key={option.value}
//         >
//           {option.value}
//         </option>
//       ))}
//     </select>
//   );
// };
// export default SelectInput;
