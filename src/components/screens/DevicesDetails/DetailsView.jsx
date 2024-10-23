import React from 'react';

import Tag from '../../common/Tag';
import ValueCard from './ValueCard';

const DetailsView = ({  }) => {
  

  return (
  
    <div className='space-y-4'>
  
        <div className='flex bg-white border rounded-lg shadow-lg p-4'>

            <div className='flex-1 space-y-1'>
                <label className='font-bold ml-1'>Location</label>
                <div className='flex gap-2'><Tag>Room 8</Tag><Tag>Room 8</Tag></div>
            </div>

            <div className='flex-1 space-y-1'>
                <label className='font-bold ml-1'>Group</label>
                <div className='flex gap-2'><Tag>Room 8</Tag><Tag>Room 8</Tag></div>
            </div>

            <div className='flex-1 space-y-1'>
                <label className='font-bold ml-1'>Tags</label>
                <div className='flex gap-2'><Tag>Room 8</Tag><Tag>Room 8</Tag></div>
            </div>

        </div>


        {/* Value Cards */}

        <div className='flex gap-4'>

            <ValueCard title="Temperature" lastUpdated="10:05 am" status="good">
                
                <div className='flex gap-4 text-4xl'>
                    <i class="fa-solid fa-temperature-three-quarters"></i> 
                    72°
                </div>

                <img src="https://placehold.co/100x100?text=Chart goes here'" alt="Placeholder" className="w-full h-48 border" style={{background:"#dddddd"}} />

            </ValueCard>

            <ValueCard title="Humidity" lastUpdated="10:05 am" status="alert">
                
                <div className='flex gap-4 text-4xl'>
                    <i class="fa-solid fa-droplet"></i> 
                    50%
                </div>

                <img src="https://placehold.co/100x100?text=Chart goes here'" alt="Placeholder" className="w-full h-48 border" style={{background:"#dddddd"}} />

            </ValueCard>

        </div>


    </div>

  );
};

export default DetailsView;