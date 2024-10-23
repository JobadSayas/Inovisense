import React, { useState } from 'react';

import CardsView from './CardsView';
import TableView from './TableView';
import Divider from '../../common/Divider';
import FiltersHolder from '../../common/FiltersHolder';
import Filter from '../../common/Filter';
import Field from '../../common/Field';
import Detail from '../../common/Detail';

const DevicesList = () =>  {

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
        <div className="flex justify-between items-center relative 
                        max-sm:items-start max-sm:h-16
        ">
            
            <header className="text-2xl font-bold">Devices</header>       
            
            {/* Status types */}
            <div className="flex justify-center items-center w-full text-sm text-gray-500 max-sm:absolute max-sm:bottom-0 space-x-4">

                <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-circle-check text-green-500"></i>
                    <span>Good</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-circle-exclamation text-yellow-500"></i>
                    <span>Low Battery/Signal</span>
                </div>
                <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-bell text-red-500"></i>
                    <span>Alert</span>
                </div>
            </div>

            
            <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                <i className="fa-solid fa-plus mr-2"></i> Add device
            </button>
            
        </div>

        
        {/* Search/Filters */}
        <div className="flex justify-between items-center gap-2">

            {/* Search Input */}
            <div className="relative w-full 
                            
            ">
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

                <Divider vertical/>

                {/* View type */}
                <div className="flex space-x-1">
                    <button 
                        className="w-9 h-9 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-200"
                        onClick={handleCardView}
                    >
                        <i className={`fa-solid fa-table-cells-large text-lg ${toggleView === 'cards' ? 'text-blue-500' : ''}`}></i>
                    </button>
                    <button 
                        className="w-9 h-9 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-200"
                        onClick={handleTableView}
                    >
                        <i className={`fa-solid fa-table-list text-lg ${toggleView === 'table' ? 'text-blue-500' : ''}`}></i>
                    </button>
                </div>

            </div>
            
        </div>

        <Divider horizontal/>
        
        {/* Conditional Rendering */}
        {toggleView === 'cards' ? <CardsView /> : <TableView />}



        {/* Add device popup - Step 1 */}

        <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

            <div className='w-[500px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Add device</h1>


                <div className='space-y-4 border-t border-b border-gray-300 py-4'>


                    <div className="flex gap-4 items-center">
                        <div className="flex-grow">
                            <Field label="Devie key">
                                <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md mb-4' type="text" value=""/>
                            </Field>
                            <p>
                                To add a device, locate the key in the bottom part of the device. It is a 6 characters code.
                            </p>
                        </div>
                        <img src="https://placehold.co/160x160" alt="Placeholder" className="w-40 h-40 border border-gray-300 rounded-md" />
                    </div>

                </div>

                <div className="flex gap-2 justify-end">

                    <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
                        Cancel
                    </button>

                    <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white py-2 px-3">
                        Next
                    </button>

                </div>
            
            </div>

        </div>



        {/* Add device popup - Step 2 */}

        <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

            <div className='w-[500px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Add device</h1>


                <div className='space-y-4 border-t border-b border-gray-300 py-4'>


                    <div className="flex gap-4 items-center">
                        <img src="https://placehold.co/160x160" alt="Placeholder" className="w-40 h-40 border border-gray-300 rounded-md" />
                        
                        <div className="flex-grow">

                            <div className='grid grid-cols-2'>

                                <Detail label="Device EUI">
                                    789FDS87F9SD
                                </Detail>

                                <Detail label="Join EUI">
                                    789FDS87F9SD    
                                </Detail>
                                
                            </div>
                                
                            <Divider horizontal/>

                            <Field label="Devie name">
                                <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md mb-4' type="text" />
                            </Field>
                        </div>
                    </div>

                </div>

                <div className="flex gap-2 justify-end">

                    <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
                        Cancel
                    </button>

                    <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white py-2 px-3">
                        Add
                    </button>

                </div>
            
            </div>

        </div>



        


    </>);
};

export default DevicesList;
