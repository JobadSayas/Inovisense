import React, { useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import Divider from '../../common/Divider';
import Filter from '../../common/Filter';
import FiltersHolder from '../../common/FiltersHolder';
import DashboardCard from './DashboardCard'



const DashboardScreen = () =>  {

    return (<>

        {/* Header */}
        <div className="flex justify-between items-center relative 
                        max-md:items-start max-md:flex-col max-md:gap-3
        ">
            
            <header className="text-2xl font-bold">Dashboard</header>       
            
            
            <div className='flex gap-2
                            max-md:grid max-md:grid-cols-2 max-md:w-full
            '>

                <div className='flex flex-col bg-white py-1 px-3 min-w-32 border border-gray-300 rounded-lg items-center leading-tight'>
                    <div className='space-x-2'>
                        <span className='text-xs'>Total devices</span>
                    </div>
                    <span className='font-bold text-lg'>25</span>
                </div>

                <div className='flex flex-col bg-white py-1 px-3 min-w-32 border border-gray-300 rounded-lg items-center leading-tight'>
                    <div className='space-x-2'>
                        <i className="fa-solid fa-circle-check text-green-500"></i>
                        <span className='text-xs'>Good</span>
                    </div>
                    <span className='font-bold text-lg'>25</span>
                </div>

                <div className='flex flex-col bg-white py-1 px-3 min-w-32 border border-gray-300 rounded-lg items-center leading-tight'>
                    <div className='space-x-2'>
                        <i className="fa-solid fa-circle-exclamation text-yellow-500"></i>
                        <span className='text-xs'>Low battery/signal</span>
                    </div>
                    <span className='font-bold text-lg'>25</span>
                </div>

                <div className='flex flex-col bg-white py-1 px-3 min-w-32 border border-gray-300 rounded-lg items-center leading-tight'>
                    <div className='space-x-2'>
                        <i className="fa-solid fa-bell text-red-500"></i>
                        <span className='text-xs'>Alert</span>
                    </div>
                    <span className='font-bold text-lg'>25</span>
                </div>

            </div>
            
        </div>

        
        
        

        <Divider horizontal/>

        <div className="flex justify-end">
            <FiltersHolder>
                <Filter label="Status" value="All"></Filter>
                <Filter label="Group" value="All"></Filter>
                <Filter label="Location" value="All"></Filter>
                <Filter label="Site" value="All"></Filter>
            </FiltersHolder>
        </div>

        <div class="grid grid-cols-1 gap-4 
            max-sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3 
            2xl:grid-cols-4"
        >

            <DashboardCard
                title="Device name"
                status="good"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >

                <div className='flex flex-col w-full'>
                
                    <div className='flex gap-4'>
                    
                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-temperature-low text-lg"></i>
                                <span className="text-lg">72</span>
                            </div>
                            <span className="text-xs text-gray-500">Temperature</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-droplet text-lg"></i>
                                <span className="text-lg">5%</span>
                            </div>
                            <span className="text-xs text-gray-500">Humidity</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-cloud text-lg"></i>
                                <span className="text-lg">10%</span>
                            </div>
                            <span className="text-xs text-gray-500">CO2</span>
                        </div>

                    
                    </div>

                    <Divider horizontal/>

                    <TabGroup>

                        <TabList className="flex justify-center gap-2 mb-4">

                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Temperature</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Humidity</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">CO2</Tab>

                        </TabList>


                        <TabPanels>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 1 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>
                            
                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 2 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 3 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                        </TabPanels>

                    </TabGroup>


                </div>

            </DashboardCard>



            <DashboardCard
                title="Device name"
                status="alert"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >

                <div className='flex flex-col w-full'>
                
                    <div className='flex gap-4'>
                    
                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-temperature-low text-lg"></i>
                                <span className="text-lg">72</span>
                            </div>
                            <span className="text-xs text-gray-500">Temperature</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-droplet text-lg"></i>
                                <span className="text-lg">5%</span>
                            </div>
                            <span className="text-xs text-gray-500">Humidity</span>
                        </div>
                    
                    </div>

                    <Divider horizontal/>

                    <TabGroup>

                        <TabList className="flex justify-center gap-2 mb-4">

                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Temperature</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Humidity</Tab>

                        </TabList>


                        <TabPanels>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 1 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>
                            
                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 2 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                        </TabPanels>

                    </TabGroup>


                </div>

            </DashboardCard>



            <DashboardCard
                title="Device name"
                status="good"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >

                <div className='flex flex-col w-full'>
                
                    <div className='flex gap-4'>
                    
                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-temperature-low text-lg"></i>
                                <span className="text-lg">72</span>
                            </div>
                            <span className="text-xs text-gray-500">Temperature</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-droplet text-lg"></i>
                                <span className="text-lg">5%</span>
                            </div>
                            <span className="text-xs text-gray-500">Humidity</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-cloud text-lg"></i>
                                <span className="text-lg">10%</span>
                            </div>
                            <span className="text-xs text-gray-500">CO2</span>
                        </div>

                    
                    </div>

                    <Divider horizontal/>

                    <TabGroup>

                        <TabList className="flex justify-center gap-2 mb-4">

                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Temperature</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Humidity</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">CO2</Tab>

                        </TabList>


                        <TabPanels>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 1 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>
                            
                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 2 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 3 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                        </TabPanels>

                    </TabGroup>


                </div>

            </DashboardCard>



            <DashboardCard
                title="Device name"
                status="good"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >

                <div className='flex flex-col w-full'>
                
                    <div className='flex gap-4'>
                    
                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-temperature-low text-lg"></i>
                                <span className="text-lg">72</span>
                            </div>
                            <span className="text-xs text-gray-500">Temperature</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-droplet text-lg"></i>
                                <span className="text-lg">5%</span>
                            </div>
                            <span className="text-xs text-gray-500">Humidity</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-cloud text-lg"></i>
                                <span className="text-lg">10%</span>
                            </div>
                            <span className="text-xs text-gray-500">CO2</span>
                        </div>

                    
                    </div>

                    <Divider horizontal/>

                    <TabGroup>

                        <TabList className="flex justify-center gap-2 mb-4">

                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Temperature</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Humidity</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">CO2</Tab>

                        </TabList>


                        <TabPanels>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 1 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>
                            
                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 2 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 3 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                        </TabPanels>

                    </TabGroup>


                </div>

            </DashboardCard>



            <DashboardCard
                title="Device name"
                status="good"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >

                <div className='flex flex-col w-full'>
                
                    <div className='flex gap-4'>
                    
                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-temperature-low text-lg"></i>
                                <span className="text-lg">72</span>
                            </div>
                            <span className="text-xs text-gray-500">Temperature</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-droplet text-lg"></i>
                                <span className="text-lg">5%</span>
                            </div>
                            <span className="text-xs text-gray-500">Humidity</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-cloud text-lg"></i>
                                <span className="text-lg">10%</span>
                            </div>
                            <span className="text-xs text-gray-500">CO2</span>
                        </div>

                    
                    </div>

                    <Divider horizontal/>

                    <TabGroup>

                        <TabList className="flex justify-center gap-2 mb-4">

                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Temperature</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Humidity</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">CO2</Tab>

                        </TabList>


                        <TabPanels>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 1 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>
                            
                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 2 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 3 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                        </TabPanels>

                    </TabGroup>


                </div>

            </DashboardCard>



            <DashboardCard
                title="Device name"
                status="good"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >

                <div className='flex flex-col w-full'>
                
                    <div className='flex gap-4'>
                    
                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-temperature-low text-lg"></i>
                                <span className="text-lg">72</span>
                            </div>
                            <span className="text-xs text-gray-500">Temperature</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-droplet text-lg"></i>
                                <span className="text-lg">5%</span>
                            </div>
                            <span className="text-xs text-gray-500">Humidity</span>
                        </div>

                        <div className="flex flex-col items-center space-y-1 flex-1">
                            <div className="flex items-center space-x-2">
                                <i className="fa-solid fa-cloud text-lg"></i>
                                <span className="text-lg">10%</span>
                            </div>
                            <span className="text-xs text-gray-500">CO2</span>
                        </div>

                    
                    </div>

                    <Divider horizontal/>

                    <TabGroup>

                        <TabList className="flex justify-center gap-2 mb-4">

                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Temperature</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">Humidity</Tab>
                            <Tab className="text-xs border border-white data-[selected]:border-black py-1 px-1 rounded-md">CO2</Tab>

                        </TabList>


                        <TabPanels>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 1 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>
                            
                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 2 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                            <TabPanel>
                                <img src="https://placehold.co/100x100?text=Chart 3 goes here" alt="Placeholder" className="w-full h-44" style={{background:"#dddddd"}} />
                            </TabPanel>

                        </TabPanels>

                    </TabGroup>


                </div>

            </DashboardCard>


        </div>

    </>);
};

export default DashboardScreen;
