import React from 'react';

const FiltersHolder = ({ children }) => {

  return (<>

    <button 
        className="w-9 h-9 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100 lg:hidden">
        <i class="fa-solid fa-filter"></i>
    </button>

    <div className="flex flex-wrap gap-1 max-lg:hidden flex-nowrap">
        {children}
    </div>  
  
  </>
  );
};

export default FiltersHolder;
