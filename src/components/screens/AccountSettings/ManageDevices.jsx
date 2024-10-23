import React from 'react';

import Divider from '../../common/Divider';

const ManageDevices = ({ }) => {

  return (<>

    {/* Header */}
    <div className="flex justify-between items-start mb-4 relative max-sm:mb-6">
              
        <div className='flex gap-3 justify-center items-center max-sm:flex-col max-sm:items-start'>
            <button className="text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
            <i className="fa-solid fa-chevron-left mr-2"></i>
            <span>Back</span>
            </button>

            <header className="text-2xl font-bold">Manage devices</header> 
        </div>

        <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
            <i className="fa-solid fa-plus mr-2"></i>
            Add device
        </button>

        
    </div>


    {/* Search Input */}
    <div className="relative sm:w-96 w-full">
        <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </div>

    

    <Divider horizontal/>


    <div class="max-md:w-full max-md:overflow-auto">
        <table class="w-full text-left border-collapse bg-white">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-2 px-4 font-bold">Device name</th>
                    <th class="py-2 px-4 font-bold w-[174px]">Action</th>
                </tr>
            </thead>
            <tbody>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">The name of the device</td>
                    <td class="py-2 px-4">
                        <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                            <i class="fa-solid fa-trash-can mr-2"></i> Delete
                        </button>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>


    {/* Delete device */}
    <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

        <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Delete device</h1>


            <div className='space-y-4 border-t border-gray-300 py-6'>

                <p>
                    Are you sure you want to delete the device?
                </p>

            </div>

            <div className="flex gap-2 justify-end">

                <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
                Cancel
                </button>

                <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-red-600 whitespace-nowrap bg-red-500 text-white py-2 px-3">
                Delete
                </button>
            </div>

        </div>
            
    </div>


    

    </>);

};

export default ManageDevices;