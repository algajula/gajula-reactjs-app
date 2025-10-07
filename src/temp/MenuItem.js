import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router for navigation

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    if (item.subMenus) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li>
      <div onClick={toggleSubMenu} className="tabs-container">
      <div className="tab-buttons">
        {item.path ? <Link to={item.path}>{item.name}</Link> : <span>{item.name}</span>}
        {item.subMenus && (isOpen ? ' ▲' : ' ▼')}
       </div>
      </div>
      {item.subMenus && isOpen && (
        <ul>
          {item.subMenus.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;