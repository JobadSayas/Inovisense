import React from 'react';

import Divider from '../../common/Divider';
import FiltersHolder from '../../common/FiltersHolder';
import Filter from '../../common/Filter';

const DeviceAccess = ({ }) => {

  return (<>
    

        {/* Search/Filters */}
        <div className="flex justify-between hover:bg-gray-100 gap-2">

          {/* Search Input */}
          <div className="relative w-full">
            <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>

          <Divider vertical/>

          {/* Filters */}
          <FiltersHolder>
            <Filter label="Status" value="All"></Filter>
            <Filter label="Group" value="All"></Filter>
            <Filter label="Location" value="All"></Filter>                    
          </FiltersHolder>

        </div>

      <Divider horizontal/>


      <div class="max-md:w-full max-md:overflow-auto">
        <table class="w-full text-left border-collapse bg-white">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-2 px-4 font-bold">Device name</th>
                    <th class="py-2 px-4 font-bold">Location</th>
                    <th class="py-2 px-4 font-bold">Users</th>
                    <th class="py-2 px-4 font-bold w-[174px]">Actions</th>
                </tr>
            </thead>
            <tbody>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">Device number 1</td>
                    <td class="py-2 px-4">Library</td>
                    <td class="py-2 px-4">Robert Smith, Susan White, Jose Hernandez, John Jackson, Peter Peterson, Michael Hawk, William Hanks</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-user-gear mr-2"></i> Manage users
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">Device number 1</td>
                    <td class="py-2 px-4">Room 3</td>
                    <td class="py-2 px-4">Susan White</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-user-gear mr-2"></i> Manage users
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">Device number 1</td>
                    <td class="py-2 px-4">Room 3</td>
                    <td class="py-2 px-4">Susan White</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-user-gear mr-2"></i> Manage users
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">Device number 1</td>
                    <td class="py-2 px-4">Room 3</td>
                    <td class="py-2 px-4">Susan White</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-user-gear mr-2"></i> Manage users
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">Device number 1</td>
                    <td class="py-2 px-4">Room 3</td>
                    <td class="py-2 px-4">John Jackson</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-user-gear mr-2"></i> Manage users
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">Device number 1</td>
                    <td class="py-2 px-4">Room 3</td>
                    <td class="py-2 px-4">Susan White, John Jackson, Jose Hernandez</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-user-gear mr-2"></i> Manage users
                        </button>
                    </td>
                </tr>

            </tbody>
        </table>
      </div>


      {/* Delete device */}
      <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

        <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

          <h1 className="text-lg font-bold">Manage users</h1>

          <div className='space-y-4 border-t border-b border-gray-300 py-4'>

            <div className="relative w-full relative">
              <input type="text" placeholder="Search to add user" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>

              {/* Results */}
              <div className=' absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-full top-10'>

                <div className='flex justify-between pl-1 items-center'>
                  Robert Smith
                  <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                    <i class="fa-solid fa-user-plus"></i>
                  </button>
                </div>

                <div className='flex justify-between pl-1 items-center'>
                  Robert Smith
                  <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                    <i class="fa-solid fa-user-plus"></i>
                  </button>
                </div>

                <div className='flex justify-between pl-1 items-center'>
                  Robert Smith
                  <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                    <i class="fa-solid fa-user-plus"></i>
                  </button>
                </div>

              </div>

            </div>

            <div className='flex justify-between pl-1 items-center'>
              Robert Smith
              <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <div className='flex justify-between pl-1 items-center'>
              Robert Smith
              <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <div className='flex justify-between pl-1 items-center'>
              Robert Smith
              <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <div className='flex justify-between pl-1 items-center'>
              Robert Smith
              <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>



          </div>

          <div className="flex gap-2 justify-end">

            <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
              Cancel
            </button>

            <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white py-2 px-3">
              Apply
            </button>

          </div>
          
        </div>

      </div>

  </>);
};

export default DeviceAccess;