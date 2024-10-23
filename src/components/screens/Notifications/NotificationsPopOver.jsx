import React from 'react';

import Divider from '../../common/Divider';

const NotificationsPopOver = ({ className }) => {

  return (
    
    <div className={`bg-white border border-gray-300 p-3 rounded-bl-lg rounded-br-lg shadow-lg absolute top-[63px] right-0 text-sm overflow-auto 
                    sm:max-h-[498px] max-sm:w-screen ${className}`} style={{ height: "calc(100vh - 63px)" }}>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center pb-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center py-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center py-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center py-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center py-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center py-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <div className='cursor-pointer border-b border-gray-300 flex gap-4 items-center py-2' >
            <img src="https://placehold.co/80x80" className="w-20 h-20 rounded-md"/>
            
            <div className=''>
                <div className='font-bold'>Name of the device</div>
                <div>Temperature below -10F</div>
                <div>jul 26, 10:00 am</div>
            </div>

            <i className="fa-solid fa-circle-check text-green-500"></i>
        </div>

        <button className='text-center w-full hover:bg-gray-100 mt-2 py-2'>See all notifications</button>

    </div>

  );
};

export default NotificationsPopOver;
