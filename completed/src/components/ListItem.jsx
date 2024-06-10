import React from "react";

const ListItem = ({ name, handleClick, selected }) => {
  return (
    <li className={selected ? "selected" : null} onClick={handleClick}>
      {name}
    </li>
  );
};

export default ListItem;
