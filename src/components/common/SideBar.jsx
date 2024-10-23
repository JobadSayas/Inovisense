import React from 'react';

const SideBar = ({ visible }) => {
  return (
    <div
      className={`fixed top-16 left-0 h-full bg-white w-56 p-2 border-r border-gray-300 z-10 max-xl:shadow-lg
        ${visible ? 'block' : 'hidden'}
      `}
    >
      <div className="flex flex-col space-y-2 p-2">
        <button className="flex items-center justify-between pl-5 pr-3 h-14 rounded-lg bg-blue-500 text-white">
          <span className="flex items-center">
            <i className="fa-solid fa-square-poll-vertical mr-4 text-xl"></i>
            <span>Dashboard</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </button>
        <button className="flex items-center justify-between pl-5 pr-3 h-14 rounded-lg hover:bg-gray-100">
          <span className="flex items-center">
            <i className="fa-solid fa-users mr-4 text-xl text-blue-500"></i>
            <span>Users</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </button>
        <button className="flex items-center justify-between pl-5 pr-3 h-14 rounded-lg hover:bg-gray-100">
          <span className="flex items-center">
            <i className="fa-solid fa-file-code mr-4 text-xl text-blue-500"></i>
            <span>Applications</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </button>
        <button className="flex items-center justify-between pl-5 pr-3 h-14 rounded-lg hover:bg-gray-100">
          <span className="flex items-center">
            <i className="fa-solid fa-hard-drive mr-4 text-xl text-blue-500"></i>
            <span>Devices</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </button>
        <button className="flex items-center justify-between pl-5 pr-3 h-14 rounded-lg hover:bg-gray-100">
          <span className="flex items-center">
            <i className="fa-solid fa-tower-broadcast mr-4 text-xl text-blue-500"></i>
            <span>Gateways</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </button>
        <button className="flex items-center justify-between pl-5 pr-3 h-14 rounded-lg hover:bg-gray-100">
          <span className="flex items-center">
            <i className="fa-solid fa-bell mr-4 text-xl text-blue-500"></i>
            <span>Notifications</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-auto"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
