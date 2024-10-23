import React from 'react';

import DeviceCard from './DeviceCard';

const CardsView = () =>  {

    return (<>

        {/* Devices cards */}
        <div class="grid grid-cols-1 gap-4 
            max-sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3 
            2xl:grid-cols-4"
        >

            <DeviceCard
                title="Device card"
                status="good"
                image = "https://placehold.co/80x80"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >
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
            </DeviceCard>


            <DeviceCard
                title="Device card"
                status="alert"
                image = "https://placehold.co/80x80"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >
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
                    <span className="text-xs text-gray-500">Weather</span>
                </div>
            </DeviceCard>


            <DeviceCard
                title="Device card"
                status="good"
                image = "https://placehold.co/80x80"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >
                <div className="flex flex-col items-center space-y-1 flex-1">
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-temperature-low text-lg"></i>
                        <span className="text-lg">72</span>
                    </div>
                    <span className="text-xs text-gray-500">Temperature</span>
                </div>

            </DeviceCard>


            <DeviceCard
                title="Device card"
                status="good"
                image = "https://placehold.co/80x80"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >
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
                    <span className="text-xs text-gray-500">Weather</span>
                </div>
            </DeviceCard>


            <DeviceCard
                title="Device card"
                status="good"
                image = "https://placehold.co/80x80"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >
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
            </DeviceCard>


            <DeviceCard
                title="Device card"
                status="low"
                image = "https://placehold.co/80x80"
                battery = "85%"
                signal = "95%"
                lastUpdated = "10:05 am"
            >
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
            </DeviceCard>
            
        </div>

    </>);
  
};

export default CardsView;