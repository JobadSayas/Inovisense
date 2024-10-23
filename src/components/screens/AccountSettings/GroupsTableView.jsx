import React from 'react';

const GroupsTableView = ({ }) => {

    return (<div>

        <h2 className='text-lg font-bold mb-4'>Groups</h2>
    
        <div class="max-md:w-full max-md:overflow-auto">
            <table class="w-full text-left border-collapse bg-white">
                <thead>
                    <tr class="bg-gray-200 text-gray-700">
                        <th class="py-2 px-4 font-bold">Group</th>
                        <th class="py-2 px-4 font-bold">Users</th>
                        <th class="py-2 px-4 font-bold">Devices</th>
                        <th class="py-2 px-4 font-bold w-[200px] text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>


                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>


                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>


                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>


                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>


                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>


                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Room 1</td>
                        <td class="py-2 px-4">10 users</td>
                        <td class="py-2 px-4">Devices</td>
                        <td class="py-2 px-4 text-right">
                            <div class="relative inline-block">

                                <button class="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>

                                <div class="hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[200px] top-8 right-0">
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Manage devices</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Rename group</button>
                                    <button class="text-left hover:bg-gray-100 p-2 rounded">Delete</button>
                                </div>

                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    

    </div>);
};

export default GroupsTableView;