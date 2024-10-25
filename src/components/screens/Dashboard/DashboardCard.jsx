import React from 'react';
import { useNavigate } from 'react-router-dom';

import CardBase from '../../common/CardBase';

const DashboardCard = ({title, status, children, image, battery, signal, lastUpdated}) =>  {

    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`/device-details`);
    };

    return (<>

        <CardBase            
            
            title={title}
            status = {status}
            className="cursor-pointer"
            onClick={() => handleRowClick()}
            headerSlot={<>
            
                {/* Battery and signal */}
                <div className="flex space-x-1 items-center gap-1 ml-2">
                    <span className="flex gap-1 items-center whitespace-nowrap"><i className="fa-solid fa-battery-half"></i> <span className="text-xs">{battery}</span></span>
                    <span className="flex gap-1 items-center whitespace-nowrap" ><i className="fa-solid fa-signal text-sm"></i> <span className="text-xs">{signal}</span></span>
                </div>
            
            </>}


            body={
                <div className='flex items-center space-x-2'>
                
                    {children}
            
                </div>
            }


            footer={<>
                <button className="flex items-center p-3 py-1 text-xs focus:outline-none rounded-md hover:bg-gray-100">
                    <i className="fa-solid fa-trash-can mr-1"></i> Remve from dashboard
                </button>
                
                <span className="text-gray-500 text-xs">Last updated {lastUpdated}</span>
            </>}
        
        />

    </>);
  
};

export default DashboardCard;