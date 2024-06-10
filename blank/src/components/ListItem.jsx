import React from "react";
import "./Components.css";

const ListItem = ({ name, handleClick, selected }) => {
  return (
    <li className={selected ? "selected" : null} onClick={handleClick}>
      {name}
    </li>
  );
};

export default ListItem;
