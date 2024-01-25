import React, { useEffect, useRef, useState } from 'react';
import '../style/style.css';

const DropdownMenu = ({
  id,
  options,
  reset,
  label,
  placeholder,
  defaultValue,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClick = (item) => {
    setSelected(item);
    setIsOpen(false);
    const event = new CustomEvent('dropdownEvent', { detail: item });
    window.dispatchEvent(event);
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
      className="dropdown-menu"
      aria-label="toggle select"
      id={id}
      label={label}
    >
      <div
        {...(isOpen
          ? { className: 'dropdown-menu_selected_open' }
          : { className: 'dropdown-menu_selected' })}
        aria-label="dropdown menu selected"
        onClick={toggleSelect}
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >
        <span
          className="dropdown-menu_selected_text"
          {...(selected ? { id: `selection_${id}` } : { id: `` })}
          name={name}
          defaultValue={defaultValue}
        >
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
          ? { className: 'dropdown-menu_list ' }
          : { className: 'dropdown-menu_list_hidden' })}
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
            aria-label={item.label}
            className="dropdown-menu_list_item"
            data-selected={selected === item}
          >
            <p>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DropdownMenu;
