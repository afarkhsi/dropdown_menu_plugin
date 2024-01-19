function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useRef, useState } from 'react';
import '../style/style.css';
const DropdownMenu = ({
  id,
  options,
  reset,
  label,
  placeholder
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);
  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const handleOnClick = item => {
    setSelected(item);
    setIsOpen(false);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.currentTarget.click();
    }
  };
  useEffect(() => {
    setSelected(null);
  }, [reset]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu",
    "aria-label": "toggle select",
    id: id,
    label: label
  }, /*#__PURE__*/React.createElement("div", _extends({}, isOpen ? {
    className: 'dropdown-menu_selected_open '
  } : {
    className: 'dropdown-menu_selected'
  }, {
    "aria-label": "dropdown menu selected",
    onClick: toggleSelect,
    onKeyDown: handleKeyDown,
    tabIndex: "0"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dropdown-menu_selected_text"
  }, selected ? selected : placeholder), /*#__PURE__*/React.createElement("span", !isOpen ? {
    className: 'arrow-down'
  } : {
    className: 'arrow-up'
  })), /*#__PURE__*/React.createElement("ul", _extends({}, isOpen ? {
    className: 'dropdown-menu_list '
  } : {
    className: 'dropdown-menu_list_hidden'
  }, {
    role: "listbox",
    "aria-label": "select menu options",
    "aria-expanded": isOpen,
    ref: dropdownRef,
    style: isOpen ? {
      height: dropdownRef.current.scrollHeight + 'px'
    } : {
      height: '0px'
    }
  }), options.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.label,
    onClick: () => handleOnClick(item?.value),
    "aria-label": item.label,
    className: "dropdown-menu_list_item",
    "data-selected": selected === item
  }, /*#__PURE__*/React.createElement("p", null, item.value)))));
};
export default DropdownMenu;