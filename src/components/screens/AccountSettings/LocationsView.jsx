import React from 'react';

import LocationsTableView from './LocationsTableView'
import SitesTableView from './SitesTableView'
import GroupsTableView from './GroupsTableView'
import TagsTableView from './TagsTableView'

import Field from '../../common/Field';

const LocationsView = ({ }) => {

  return (<>
    
    <div className='flex flex-col gap-10'>
      <LocationsTableView/>
      <SitesTableView/>
      <GroupsTableView/>
      <TagsTableView/>
    </div>

    {/* Add group popup */}
    <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

      <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

        <h1 className="text-lg font-bold">Rename group</h1>


        <div className='space-y-4 border-t border-b border-gray-300 py-4'>

          <Field label="New name">
            <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
          </Field>

        </div>

        <div className="flex gap-2 justify-end">

          <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
            Cancel
          </button>

          <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white py-2 px-3">
            Save
          </button>

        </div>

      </div>

    </div>


    {/* Delete group */}
    <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

        <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Delete group</h1>


            <div className='space-y-4 border-t border-gray-300 py-6'>

                <p>
                  Are you sure you want to  delete the group? 
                </p>
                <p>
                  If you do, all devices assigned to this group will not longer be related to it.
                </p>

            </div>

            <div className="flex gap-2 justify-end">

                <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
                Cancel
                </button>

                <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-red-600 whitespace-nowrap bg-red-500 text-white py-2 px-3">
                Delete
                </button>
            </div>

        </div>
            
    </div>


  </>);
};

export default LocationsView;
