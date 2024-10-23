import React from 'react';

import CardBase from '../../common/CardBase';
import FlexGap from '../../common/FlexGap';

const DeviceCard = ({title, status, children, image, battery, signal, lastUpdated}) =>  {

    return (<>

        <CardBase            
            
            title={title}
            status = {status}
            headerSlot={<>
            
                {/* Battery and signal */}
                <div className="flex space-x-1 items-center gap-1 ml-2">
                    <span className="flex gap-1 items-center whitespace-nowrap"><i className="fa-solid fa-battery-half"></i> <span className="text-xs">{battery}</span></span>
                    <span className="flex gap-1 items-center whitespace-nowrap" ><i className="fa-solid fa-signal text-sm"></i> <span className="text-xs">{signal}</span></span>
                </div>
            
            </>}


            body={
                <div className='flex items-center space-x-2'>
                
                    <img src={image} alt="Placeholder" className="w-20 h-20 border border-gray-300 rounded-lg" />

                    <div className="flex space-x-2 flex-grow justify-between">

                        {children}
                        
                    </div>
            
                </div>
            }


            footer={<>
                <button className="flex items-center p-3 py-1 text-xs focus:outline-none rounded-md hover:bg-gray-100">
                    <i className="fa-solid fa-plus mr-1"></i> Add to dashboard
                </button>
                
                <span className="text-gray-500 text-xs">Last updated {lastUpdated}</span>
            </>}
        
        />

    </>);
  
};

export default DeviceCard;