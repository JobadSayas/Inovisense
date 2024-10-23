import React, { useState } from 'react';

import Divider from '../../common/Divider';
import Filter from '../../common/Filter';
import FiltersHolder from '../../common/FiltersHolder';

const UsersListScreen = () =>  {

    // Toggle views
    const [toggleView, setToggleView] = useState('cards');

    const handleCardView = () => {
        setToggleView('cards');
    }
    
    const handleTableView = () => {
        setToggleView('table');
    }

    return (<>

        {/* Header */}
        <div className="flex justify-between items-center relative ">
            
            <header className="text-2xl font-bold">Users</header>     

            <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                <i className="fa-solid fa-plus mr-2"></i> Add user
            </button>  

        </div>

        
        {/* Search/Filters */}
        <div className="flex justify-between items-center gap-2">

            {/* Search Input */}
            <div className="relative w-full max-w-96">
                <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>


            {/* Right side container */}
            <div className="flex gap-2 flex-nowrap">
        
                {/* Filters */}
                <FiltersHolder>
                    <Filter label="Status" value="All"></Filter>
                    <Filter label="Group" value="All"></Filter>
                    <Filter label="Location" value="All"></Filter>                    
                </FiltersHolder>   

            </div>
            
        </div>


        <Divider horizontal/>

        {/* Table */}
        <div class="max-md:w-full max-md:overflow-auto">
            <table class="w-full text-left border-collapse bg-white">
                <thead>
                    <tr class="bg-gray-200 font-bold">
                        <th class="py-2 px-4">Name</th>
                        <th class="py-2 px-4">Role</th>
                        <th class="py-2 px-4">Status</th>
                        <th class="py-2 px-4">Email</th>
                        <th class="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50">
                        <td class="py-2 px-4">
                            John Roberst
                        </td>
                        <td class="py-2 px-4">
                            Account admin
                        </td>
                        <td class="py-2 px-4 text-green-500">
                            Active
                        </td>
                        <td class="py-2 px-4 text-no">
                            username@gmail.com
                        </td>
                        <td class="py-2 px-4 flex gap-2 w-48">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> View
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-trash-can mr-2"></i> Delete
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-pen-to-square mr-2"></i> Edit
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50">
                        <td class="py-2 px-4">
                            Robert Lewis
                        </td>
                        <td class="py-2 px-4">
                            Device admin
                        </td>
                        <td class="py-2 px-4 text-green-500">
                            Active
                        </td>
                        <td class="py-2 px-4 text-no">
                            username@gmail.com
                        </td>
                        <td class="py-2 px-4 flex gap-2 w-48">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> View
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-trash-can mr-2"></i> Delete
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-pen-to-square mr-2"></i> Edit
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50">
                        <td class="py-2 px-4">
                            John Roberst
                        </td>
                        <td class="py-2 px-4">
                            Regular user
                        </td>
                        <td class="py-2 px-4 text-green-500">
                            Active
                        </td>
                        <td class="py-2 px-4 text-no">
                            username@gmail.com
                        </td>
                        <td class="py-2 px-4 flex gap-2 w-48">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> View
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-trash-can mr-2"></i> Delete
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-pen-to-square mr-2"></i> Edit
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50">
                        <td class="py-2 px-4">
                            John Roberst
                        </td>
                        <td class="py-2 px-4">
                            Regular user
                        </td>
                        <td class="py-2 px-4 text-gray-400">
                            Deactive
                        </td>
                        <td class="py-2 px-4 text-no">
                            username@gmail.com
                        </td>
                        <td class="py-2 px-4 flex gap-2 w-48">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> View
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-trash-can mr-2"></i> Delete
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-pen-to-square mr-2"></i> Edit
                            </button>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50">
                        <td class="py-2 px-4">
                            John Roberst
                        </td>
                        <td class="py-2 px-4">
                            Regular user
                        </td>
                        <td class="py-2 px-4 text-green-500">
                            Active
                        </td>
                        <td class="py-2 px-4 text-no">
                            username@gmail.com
                        </td>
                        <td class="py-2 px-4 flex gap-2 w-48">
                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i class="fa-solid fa-circle-plus mr-2"></i> View
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-trash-can mr-2"></i> Delete
                            </button>

                            <button class="flex items-center p-3 py-1 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-gray-100">
                                <i className="fa-solid fa-pen-to-square mr-2"></i> Edit
                            </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>



       
    </>);
};

export default UsersListScreen;