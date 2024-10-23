import React from 'react';

import CardBase from '../../common/CardBase';

const DeviceCard = ({title, status, children, lastUpdated}) =>  {

    return (<>

        <CardBase            
            
            title={title}
            status = {status}
            className="flex-1"


            body={<>
            
                <div className="flex space-y-4 flex-col w-full items-center pt-2">

                    {children}
                    
                </div>
            
            </>}


            footer={<>
                <button className="flex items-center p-3 py-1 text-xs focus:outline-none rounded-md hover:bg-gray-100">
                    <i class="fa-solid fa-expand mr-1"></i> Expand chart
                </button>
                
                <span className="text-gray-500 text-xs">Last updated {lastUpdated}</span>
            </>}
        
        />

    </>);
  
};

export default DeviceCard;