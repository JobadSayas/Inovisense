import React from 'react';

const TableView = () =>  {


    return (

        <div class="max-md:w-full max-md:overflow-auto">
            <table class="w-full text-left border-collapse bg-white">
                <thead>
                    <tr class="bg-gray-200 text-gray-700">
                        <th class="py-2 px-4 font-bold">Device name</th>
                        <th class="py-2 px-4 font-bold">Status</th>
                        <th class="py-2 px-4 font-bold">Values</th>
                        <th class="py-2 px-4 font-bold">Signal</th>
                        <th class="py-2 px-4 font-bold">Battery</th>
                        <th class="py-2 px-4 font-bold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-exclamation text-yellow-500 mr-1"></i> Low Battery/Signal</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-bell text-red-500 mr-1"></i> Alert</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
                        <td class="py-2 px-4">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> Add to dashboard
                            </button>
                        </td>
                    </tr>
                    <tr class="h-11 border-b border-gray-300">
                        <td class="py-2 px-4">Device</td>
                        <td class="py-2 px-4"><i class="fa-solid fa-circle-check text-green-500 mr-1"></i> Good</td>
                        <td class="py-2 px-4">
                            <span class="whitespace-nowrap">Temperature: 80 | </span> <span class="whitespace-nowrap">Humidity: 10% | </span> <span class="whitespace-nowrap">CO2: 3%</span>
                        </td>
                        <td class="py-2 px-4">100%</td>
                        <td class="py-2 px-4">85%</td>
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