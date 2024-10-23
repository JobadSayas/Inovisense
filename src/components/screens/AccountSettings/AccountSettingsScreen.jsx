import React, { useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import DetailsView from './DetailsView'
import LocationsView from './LocationsView'
import SuscriptionsView from './SuscriptionsView'
import DeviceAccess from './DeviceAccess'

const AccountSettingsScreen = () =>  {


    return (<>

      {/* Header */}
      <div className="flex justify-between items-center relative ">
            
        <header className="text-2xl font-bold">Account settings</header>       

      </div>


      {/* Tabs */}
      <TabGroup>

        <TabList className="border-b border-gray-300">

          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Details</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Locations</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Suscriptions</Tab>
          <Tab className="pt-2 pb-1 px-4 box-border border-bottom data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[selected]:font-bold data-[hover]:bg-gray-200 data-[hover]:border-gray-200 data-[hover]:border-b-4">Device access</Tab>

        </TabList>


        <TabPanels>

          <TabPanel className="py-5">
            <DetailsView/>
          </TabPanel>
          
          <TabPanel className="py-5">
            <LocationsView/>
          </TabPanel>

          <TabPanel className="py-5">
            <SuscriptionsView/>
          </TabPanel>

          <TabPanel className="py-5">
            <DeviceAccess/>
          </TabPanel>

        </TabPanels>


      </TabGroup>

    </>);
};

export default AccountSettingsScreen;