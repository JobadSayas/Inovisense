import React from 'react';

const Field = ({ label, children, className }) => {

  return (

    <div className={`flex flex-col gap-1 ${className}`}>
        <label className="font-bold text-sm">{label}</label>
        {children}
    </div>

  );
};

export default Field;