import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Divider from '../../common/Divider';
import FiltersHolder from '../../common/FiltersHolder';
import Filter from '../../common/Filter';
import DownloadButton from '../../common/DownloadButton';

const NotificationsListScreen = () =>  {

    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`/notification-details`);
    };

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
            
            <header className="text-2xl font-bold">Notifications</header>       

        </div>

        
        {/* Search/Filters */}
        <div className="flex justify-between items-center gap-2">

            {/* Search Input */}
            <div className="relative w-full max-w-96
                            
            ">
                <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>


            {/* Right side container */}
            <div className="flex gap-2 flex-nowrap">
        
                {/* Filters */}
                <Filter label="Status" value="All"></Filter>      

                <Divider vertical></Divider>         

                <DownloadButton/>

            </div>
            
        </div>


        <Divider horizontal/>

        {/* Table */}
        <div class="max-md:w-full max-md:overflow-auto">
            <table class="w-full text-left border-collapse bg-white">
                <thead>
                    <tr class="bg-gray-200 text-gray-700">
                        <th class="py-2 px-4 font-bold">ID</th>
                        <th class="py-2 px-4 font-bold">Device name</th>
                        <th class="py-2 px-4 font-bold">Time</th>
                        <th class="py-2 px-4 font-bold">Trigger</th>
                        <th class="py-2 px-4 font-bold">Email</th>
                        <th class="py-2 px-4 font-bold">SMS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
                        <td class="py-2 px-4">
                            0933b37b7cd8
                        </td>
                        <td class="py-2 px-4">
                            Name of the device
                        </td>
                        <td class="py-2 px-4">
                            jul 26, 10:00 am
                        </td>
                        <td class="py-2 px-4 text-no">
                            Temperature below -10F
                        </td>
                        <td class="py-2 px-4">
                            mail@school.com, mail@school.com, mail@school.com
                        </td>
                        <td class="py-2 px-4">
                            <span className='whitespace-nowrap'>432-655-6556</span>, <span className='whitespace-nowrap'>432-655-6556</span>, <span className='whitespace-nowrap'>432-655-6556</span>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
                        <td class="py-2 px-4">
                            0933b37b7cd8
                        </td>
                        <td class="py-2 px-4">
                            Name of the device
                        </td>
                        <td class="py-2 px-4">
                            jul 26, 10:00 am
                        </td>
                        <td class="py-2 px-4 text-no">
                            Temperature below -10F
                        </td>
                        <td class="py-2 px-4">
                            mail@school.com
                        </td>
                        <td class="py-2 px-4">
                            <span className='whitespace-nowrap'>432-655-6556</span>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
                        <td class="py-2 px-4">
                            0933b37b7cd8
                        </td>
                        <td class="py-2 px-4">
                            Name of the device
                        </td>
                        <td class="py-2 px-4">
                            jul 26, 10:00 am
                        </td>
                        <td class="py-2 px-4 text-no">
                            Temperature below -10F
                        </td>
                        <td class="py-2 px-4">
                            mail@school.com
                        </td>
                        <td class="py-2 px-4">
                            <span className='whitespace-nowrap'>432-655-6556</span>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
                        <td class="py-2 px-4">
                            0933b37b7cd8
                        </td>
                        <td class="py-2 px-4">
                            Name of the device
                        </td>
                        <td class="py-2 px-4">
                            jul 26, 10:00 am
                        </td>
                        <td class="py-2 px-4 text-no">
                            Temperature below -10F
                        </td>
                        <td class="py-2 px-4">
                            mail@school.com
                        </td>
                        <td class="py-2 px-4">
                            <span className='whitespace-nowrap'>432-655-6556</span>
                        </td>
                    </tr>

                    <tr class="h-11 border-b border-gray-300 hover:bg-gray-50 cursor-pointer" onClick={handleRowClick}>
                        <td class="py-2 px-4">
                            0933b37b7cd8
                        </td>
                        <td class="py-2 px-4">
                            Name of the device
                        </td>
                        <td class="py-2 px-4">
                            jul 26, 10:00 am
                        </td>
                        <td class="py-2 px-4 text-no">
                            Temperature below -10F
                        </td>
                        <td class="py-2 px-4">
                            mail@school.com
                        </td>
                        <td class="py-2 px-4">
                            <span className='whitespace-nowrap'>432-655-6556</span>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>



       
    </>);
};

export default NotificationsListScreen;