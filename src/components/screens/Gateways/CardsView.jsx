import React from 'react';

import GatewayCard from './GatewayCard';

const CardsView = () =>  {

    return (<>

        {/* Devices cards */}
        <div class="grid grid-cols-1 gap-4 
            max-sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3 
            2xl:grid-cols-4"
        >

            <GatewayCard
                title="Gateway name"
                status="good"
                lastUpdated="1 min ago"
                image = "https://placehold.co/80x80"
                signal = {true}
            />

            <GatewayCard
                title="Gateway name"
                status="alert"
                lastUpdated="1 min ago"
                image = "https://placehold.co/80x80"
                signal = {false}
            />

            <GatewayCard
                title="Gateway name"
                status="good"
                lastUpdated="1 min ago"
                image = "https://placehold.co/80x80"
                signal = {true}
            />

            <GatewayCard
                title="Gateway name"
                status="good"
                lastUpdated="1 min ago"
                image = "https://placehold.co/80x80"
                signal = {true}
            />
            
        </div>

    </>);
  
};

export default CardsView;