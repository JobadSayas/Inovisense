import React from 'react';

const Filter = ({ label, value }) => {

  return (

    <button className="flex items-center bg-white hover:bg-gray-100 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
        <span>{label}: {value}</span>
        <i className="fa-solid fa-caret-down ml-2"></i>
    </button>

  );
};

export default Filter;