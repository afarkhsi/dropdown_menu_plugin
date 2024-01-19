import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const DropdownMenu = ({ id, options, reset, label, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = (item) => {
    setSelected(item);
    setIsOpen(false);
    console.log(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.currentTarget.click();
    }
  };

  useEffect(() => {
    setSelected(null);
  }, [reset]);

  return (
    <div
      className="select-menu"
      aria-label="toggle select"
      id={id}
      label={label}
    >
      <div
        {...(isOpen
          ? { className: 'select-menu_selected_open ' }
          : { className: 'select-menu_selected' })}
        aria-label="select menu selected"
        onClick={toggleSelect}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        <span className="select-menu_selected_text">
          {selected ? selected : placeholder}
        </span>

        <span
          {...(!isOpen
            ? { className: 'arrow-down' }
            : { className: 'arrow-up' })}
        ></span>
      </div>

      <ul
        {...(isOpen
          ? { className: 'select-menu_list ' }
          : { className: 'select-menu_list_hidden' })}
        role="listbox"
        aria-label="select menu options"
        aria-expanded={isOpen}
        ref={dropdownRef}
        style={
          isOpen
            ? { height: dropdownRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        {options.map((item) => (
          <li
            key={item.label}
            onClick={() => handleOnClick(item?.value)}
            // tabIndex={isOpen ? '0' : '-1'}
            aria-label={item.label}
            className="select-menu_list_item"
            data-selected={selected === item}
          >
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
      {/* {isOpen ? (
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
      )} */}
    </div>
  );
};
export default DropdownMenu;

// //BASIC
// const DropdownMenu = ({
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
// export default DropdownMenu;
