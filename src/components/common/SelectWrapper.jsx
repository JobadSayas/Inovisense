import React from 'react';

const SelectWrapper = ({ children, className }) => {
  return (
    <div className={`select-wrapper inline-block relative ${className}`}>
      {children}
      <i className="fa-solid fa-caret-down absolute right-1 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white text-left"></i>
    </div>
  );
};

export default SelectWrapper;
