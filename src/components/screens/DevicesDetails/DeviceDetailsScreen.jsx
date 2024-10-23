import React, { useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import DetailsView from './DetailsView'
import LogView from './LogView'
import NotificationsView from './NotificationsView'
import SettingsView from './SettingsView'
import TriggeresView from './TriggeresView'

const DeviceDetails = () =>  {


    return (<>

      {/* Top buttons holder */}
      <div className='flex justify-between items-center w-full'>
          <button className="text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
              <i className="fa-solid fa-chevron-left mr-2"></i>
              <span>Back</span>
          </button>

          <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
              <i className="fa-solid fa-plus mr-2"></i> Add to dashboard
          </button>
      </div>


      {/* Device info holder */}
      <div className='flex justify-between items-center w-full'>
          
        <div className='flex gap-4 items-center'>

          <img src="https://placehold.co/80x80" alt="Placeholder" className="w-20 h-20 border border-gray-300 rounded-lg" />

          <div className='flex flex-col gap-1'>
            <h3 className='text-lg font-bold'>Device names</h3>
            <span>Status: <i className="fa-solid fa-bell text-red-500"></i> Alert</span>
          </div>

        </div>

        <div className="flex space-x-1 items-center gap-4 ml-2">
            <span className="flex gap-1 items-center whitespace-nowrap"><i className="fa-solid fa-battery-half"></i> <span className="text-xs">85%</span></span>
            <span className="flex gap-1 items-center whitespace-nowrap" ><i className="fa-solid fa-signal text-sm"></i> <span className="text-xs">93%</span></span>
        </div>
      </div>


      <TabGroup>

        <TabList className="border-b border-gray-300">

          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Details</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Log</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Notifications</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Settings</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Triggers</Tab>

        </TabList>


        <TabPanels>

          <TabPanel className="py-5">
            <DetailsView/>
          </TabPanel>
          
          <TabPanel className="py-5">
            <LogView/>
          </TabPanel>

          <TabPanel className="py-5">
            <NotificationsView/>
          </TabPanel>

          <TabPanel className="py-5">
            <SettingsView/>
          </TabPanel>

          <TabPanel className="py-5">
            <TriggeresView/>
          </TabPanel>

        </TabPanels>


      </TabGroup>

    </>);
};

export default DeviceDetails;
