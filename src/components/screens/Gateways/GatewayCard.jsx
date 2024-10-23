import React from 'react';
import CardBase from '../../common/CardBase';

const GatewayCard = ({ title, status, image, signal, lastUpdated }) => {
    return (
        <CardBase
            title={title}
            status={status}
            body={
                <div className='flex items-center space-x-2'>
                    <img src={image} alt="Placeholder" className="w-20 h-20 border border-gray-300 rounded-lg" />
                    <div className="w-full space-x-2 font text-2xl text-center">
                        {signal ? (
                            <>
                                <i className="fas fa-wifi mr-1"></i> Online
                            </>
                        ) : (
                            <>
                                <i className="fas fa-ban mr-1"></i> Offline
                            </>
                        )}
                    </div>
                </div>
            }
            footer={
                <div className="w-full flex justify-end">
                    <div className="text-gray-500 text-xs">Last updated {lastUpdated}</div>
                </div>
            }
        />
    );
};

export default GatewayCard;
