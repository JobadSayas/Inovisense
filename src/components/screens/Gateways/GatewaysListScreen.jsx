import React, { useState } from 'react';

import CardsView from './CardsView';
import TableView from './TableView';
import Divider from '../../common/Divider';
import FiltersHolder from '../../common/FiltersHolder';
import Filter from '../../common/Filter';

const GatewaysListScreen = () =>  {

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
            
            <header className="text-2xl font-bold">Gateways</header>       
            
            <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                <i className="fa-solid fa-plus mr-2"></i> Add Gateway
            </button>
            
        </div>

        
        {/* Search/Filters */}
        <div className="flex justify-between gap-2">

            {/* Search Input */}
            <div className="relative w-full 
                            
            ">
                <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>

            <Divider vertical/>

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


    </>);
};

export default GatewaysListScreen;
