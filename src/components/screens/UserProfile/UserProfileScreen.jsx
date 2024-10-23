import { React, useState } from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';


import ProfileView from './ProfileView';
import PasswordView from './PasswordView';

const UserProfileScreen = ({  }) => {  

    return (<>

        {/* Header */}
        <div className="flex justify-between items-start mb-4 relative max-sm:mb-6">
                
            <div className='flex gap-3 justify-center items-center max-sm:flex-col max-sm:items-start'>
                <header className="text-2xl font-bold">My profile</header> 
            </div>
            
        </div>


        <TabGroup>

            <TabList className="border-b border-gray-300">

            <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Profile</Tab>
            <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Password</Tab>

            </TabList>


            <TabPanels>

            <TabPanel className="py-5">
                <ProfileView/>
            </TabPanel>
            
            <TabPanel className="py-5">
                <PasswordView/>
            </TabPanel>

            </TabPanels>

        </TabGroup>


    </>);
};

export default UserProfileScreen;
