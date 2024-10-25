import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importar useLocation

const SideBar = ({ visible, onLinkClick }) => {
  const location = useLocation(); // Para obtener la ruta actual

  // Function to add the "selected" class if the path matches
  const getNavItemClass = (path) => {
    return location.pathname === path ? 'nav-item selected' : 'nav-item';
  };
  
  return (
    <div
      className={`fixed top-16 left-0 h-full bg-white w-56 p-2 border-r border-gray-300 z-10 max-xl:shadow-lg
        ${visible ? 'block' : 'hidden'}
      `}
    >
      <div className="flex flex-col space-y-2 p-2">

        <Link to="/" className={getNavItemClass('/')} onClick={onLinkClick}>
          <span className="flex items-center">
            <i className="fa-solid fa-square-poll-vertical"></i>
            <span>Dashboard</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </Link>

        <Link to="/users-list" className={getNavItemClass('/users-list')} onClick={onLinkClick}>
          <span className="flex items-center">
            <i className="fa-solid fa-users mr-4"></i>
            <span>Users</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </Link>
        
        {/* <Link to="/" className={getNavItemClass('/')} onClick={onLinkClick}>
          <span className="flex items-center">
            <i className="fa-solid fa-file-code mr-4"></i>
            <span>Applications</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </Link> */}

        <Link to="/devices-list" className={getNavItemClass('/devices-list')} onClick={onLinkClick}>
          <span className="flex items-center">
            <i className="fa-solid fa-hard-drive mr-4"></i>
            <span>Devices</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </Link>

        <Link to="/gateways-list" className={getNavItemClass('/gateways-list')} onClick={onLinkClick}>
          <span className="flex items-center">
            <i className="fa-solid fa-tower-broadcast mr-4"></i>
            <span>Gateways</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </Link>

        <Link to="/notifications-list" className={getNavItemClass('/notifications-list')} onClick={onLinkClick}>
          <span className="flex items-center">
            <i className="fa-solid fa-bell mr-4"></i>
            <span>Notifications</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </Link>

      </div>
    </div>
  );
};

export default SideBar;
