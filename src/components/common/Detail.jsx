import React from 'react';

const Detail = ({ label, children, className }) => {

  return (
    <div className={`space-y-1 ${className}`}>
        <label className='text-sm font-bold'>{label}</label>
        <div className='flex text-sm flex-col gap-1'>
            {children}
        </div>
    </div>
  );
};

export default Detail;
