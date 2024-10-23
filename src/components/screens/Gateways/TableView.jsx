import React from 'react';

const TableView = () =>  {


    return (

        <div class="max-md:w-full max-md:overflow-auto">
            <table class="w-full text-left border-collapse bg-white">
                <thead>
                    <tr class="bg-gray-200 text-gray-700">
                        <th class="py-2 px-4 font-bold">Device name</th>
                        <th class="py-2 px-4 font-bold">Status</th>
                        <th class="py-2 px-4 font-bold">Last updated</th>
                        <th class="py-2 px-4 font-bold w-[200px]">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Gateway name</td>
                        <td class="py-2 px-4 text-green-600"><i class="fas fa-wifi mr-1"></i> Online</td>
                        <td class="py-2 px-4">1 min ago</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Gateway name</td>
                        <td class="py-2 px-4 text-red-600"><i class="fa-solid fa-ban mr-1"></i> Offline</td>
                        <td class="py-2 px-4">1 min ago</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Gateway name</td>
                        <td class="py-2 px-4 text-green-600"><i class="fas fa-wifi mr-1"></i> Online</td>
                        <td class="py-2 px-4">1 min ago</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Gateway name</td>
                        <td class="py-2 px-4 text-green-600"><i class="fas fa-wifi mr-1"></i> Online</td>
                        <td class="py-2 px-4">1 min ago</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Gateway name</td>
                        <td class="py-2 px-4 text-green-600"><i class="fas fa-wifi mr-1"></i> Online</td>
                        <td class="py-2 px-4">1 min ago</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Gateway name</td>
                        <td class="py-2 px-4 text-green-600"><i class="fas fa-wifi mr-1"></i> Online</td>
                        <td class="py-2 px-4">1 min ago</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    );
  
};

export default TableView;