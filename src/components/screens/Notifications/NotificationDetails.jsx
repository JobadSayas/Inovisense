import React from 'react';

import Detail from '../../common/Detail';
import Divider from '../../common/Divider';
import Tag from '../../common/Tag';

const NotificationDetails = ({ }) => {

  return (
  
    <div className='space-y-4'>

        {/* Header */}
        <div className="flex justify-between items-center relative max-sm:mb-6
        ">
            
            <div className='flex gap-3 justify-center items-center max-sm:flex-col max-sm:items-start'>
                <button className="text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                <i className="fa-solid fa-chevron-left mr-2"></i>
                <span>Back</span>
                </button>

                <header className="text-2xl font-bold">Notification details</header> 
            </div>
            
            <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                <i className="fa-solid fa-print mr-2"></i> Print
            </button>
            
        </div>


        {/* Device info holder */}
        <div className='flex justify-between items-center w-full'>
            
            <div className='flex gap-4 items-center w-full'>
    
                <img src="https://placehold.co/80x80" alt="Placeholder" className="w-20 h-20 border border-gray-300 rounded-lg" />
    
                <div className='flex flex-col gap-1 w-full'>
                    <h3 className='text-lg font-bold mb-2'>Device name</h3>
                    
                    <div className='grid grid-cols-4'>

                        <Detail label="ID">
                            0933b37b7cd8
                        </Detail>

                        <Detail label="Device EUI">
                            JHK5J34H5K
                        </Detail>

                    </div>

                </div>
    
            </div>
    
        </div>


        <div className='flex bg-white border rounded-lg shadow-lg p-4'>

            <div className='flex-1 space-y-1'>
                <label className='font-bold ml-1'>Location</label>
                <div className='flex gap-2'><Tag>Room 8</Tag></div>
            </div>

            <div className='flex-1 space-y-1'>
                <label className='font-bold ml-1'>Group</label>
                <div className='flex gap-2'><Tag>Room 8</Tag></div>
            </div>

            <div className='flex-1 space-y-1'>
                <label className='font-bold ml-1'>Tags</label>
                <div className='flex gap-2'><Tag>Room 8</Tag></div>
            </div>

        </div>


        <div className='flex bg-white border rounded-lg shadow-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-5'>

            <div className="md:col-span-3 font-bold text-lg">Status</div>

            <Detail label="Time" >
                jul 26, 10:00 am
            </Detail>

            <Detail label="Trigger" className="md:col-span-2">
                Temperature below -10F (value: -5F) | Low battery (value: 3%)
            </Detail>

            <Detail label="Email">
                <div>mail@school.com</div>
                <div>account@school.com</div>
            </Detail>


            <Detail label="SMS">
                <div>432-655-6556</div>
                <div>432-543-6752</div>
            </Detail>

        </div>


        <div class="hidden grid grid-cols-2 md:grid-cols-4 gap-5">

            <Detail label="ID">
                0933b37b7cd8
            </Detail>

            <Detail label="Device name">
                Name of the device
            </Detail>

            <Detail label="Device EUI" className="md:col-span-2">
                Lorem Ipsum
            </Detail>

            <Detail label="Device location">
                --
            </Detail>

            <Detail label="Device group">
                --
            </Detail>
            
            <Detail label="Device site" className="md:col-span-2">
                --
            </Detail>

            

        </div>
        

        <Divider horizontal/>
        
        <div className="md:w-3/4">
            
            <div className='flex justify-between'>
                <header className="text-lg font-bold">Notes</header> 

                <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                    <i className="fa-solid fa-plus mr-2"></i>
                    <span>Add note</span>
                </button>
            </div>


            {/* New notes controls */}

            <textarea className='w-full border border-gray-300 p-2 rounded-md mt-4 mb-2' type="text" rows="5" value=""/>

            <div className='flex gap-2 justify-end'>
                <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                    <i className="fa-solid fa-ban mr-2"></i>
                    <span>Cancel</span>
                </button>

                <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                    <i className="fa-solid fa-check mr-2"></i>
                    <span>Save</span>
                </button>
            </div>


            {/* Existing notes */}

            <div className='border-t border-gray-300 pt-4 mt-4'>
                <header className='space-x-2 mb-2'>
                    <span className='font-bold'>John Dee</span>
                    <span>|</span>
                    <span>Aug 2, 10:00 am</span>
                </header>
                <div>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                </div>
            </div>

            <div className='border-t border-gray-300 pt-4 mt-4'>
                <header className='space-x-2 mb-2'>
                    <span className='font-bold'>John Dee</span>
                    <span>|</span>
                    <span>Aug 2, 10:00 am</span>
                </header>
                <div>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                </div>
            </div>


            <div className='border-t border-gray-300 pt-4 mt-4'>
                <header className='space-x-2 mb-2'>
                    <span className='font-bold'>John Dee</span>
                    <span>|</span>
                    <span>Aug 2, 10:00 am</span>
                </header>
                <div>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                </div>
            </div>

        </div>




  
    </div>
  );
};

export default NotificationDetails;
