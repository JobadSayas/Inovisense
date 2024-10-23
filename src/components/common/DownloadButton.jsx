import React from 'react';

import { Menu } from '@headlessui/react'


const DetailsView = ({  }) => {
  

  return (<>
  
  <Menu as="div" className="relative inline-block text-left text-sm">
      <div>
        <Menu.Button className="flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
            <i className='fa-solid fa-cloud-arrow-down mr-2'></i>
            <span className='border-r border-gray-300 h-full mr-1 pr-2 flex items-center'>Download</span>
            <i className="fa-solid fa-caret-down ml-2"></i>
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white border border-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                PDF
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                Excel
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>

  </>);
};

export default DetailsView;