import React from 'react';

const Divider = ({ horizontal, vertical }) => {
  // Determine the classes based on the props
  const dividerClass = vertical 
    ? 'border-l mx-2'   // Vertical divider
    : 'border-t my-4';  // Horizontal divider (default)

  return (
    <div className={`${dividerClass} border-gray-300`}></div>
  );
};

export default Divider;
