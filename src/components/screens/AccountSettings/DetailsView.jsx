import React from 'react';

import Tag from '../../common/Tag';
import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';
import Divider from '../../common/Divider';

const DetailsView = ({ }) => {

  return (<>
    
    <div>

      <div className="flex gap-2 md:float-right mb-4 justify-end">

          <div className="flex gap-3">
              <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                  <i className="fa-solid fa-pen-to-square mr-2"></i>
                  <span>Edit</span>
              </button>
          </div>

      </div>


      <div className="flex flex-col gap-4">
        
        <Field label="Name">
          <div>Yogi Solutions</div>
        </Field>

        <Field label="Address">
          <div>
            4324 Big creek st, Suit 10<br/>
            Houston, TX, 89890, USA
          </div>
        </Field>

      </div>

    </div>

    <Divider horizontal/>

    <div className='flex flex-col gap-4'>

      <div className='flex gap-3'>

        <div className='flex flex-col bg-white py-1 px-3 min-w-36 border border-gray-300 rounded-lg items-center leading-tight'>
            <div className='space-x-2'>
                <span className='text-xs'>Total users</span>
            </div>
            <div className="font-bold text-lg flex gap-4 items-center py-1">
              <i className="fa-solid fa-users"></i>
              25
            </div>
        </div>

        <div className='flex flex-col bg-white py-1 px-3 min-w-36 border border-gray-300 rounded-lg items-center leading-tight'>
            <div className='space-x-2'>
                <span className='text-xs'>Total users</span>
            </div>
            <div className="font-bold text-lg flex gap-4 items-center py-1">
              <i class="fa-solid fa-server"></i>
              25
            </div>
        </div>

      </div>


      <div className="border-t-2 border-red-500 border-gray-300"></div>

        <h3 className='font-bold text-lg'>Danger zone</h3>

        <button className="self-start w-auto flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-red-600 whitespace-nowrap bg-red-500 text-white">
          <i className="fa-solid fa-trash-can mr-2"></i> Delete account
        </button>

      <div>If you delete you will lose all the data. But you can add it as a new device later</div>

    </div>


    {/* Edit/Add account */}
    <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

      <div className='w-[500px] max-sm:w-[90%] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

        <h1 className="text-lg font-bold">Edit account</h1>

        <div className='space-y-4 border-t border-b border-gray-300 py-4'>

          <Field label="Account name">
              <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
          </Field>

          <Field label="Account address">
              <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
          </Field>

          <div className='flex gap-4'>
            <Field label="Country" className='w-full'>
                <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
            </Field>

            <Field label="City" className='w-full'>
                <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
            </Field>
          </div>

          <div className='flex gap-4'>
            <Field label="State/Providence" className='w-full'>
                <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
            </Field>

            <Field label="Zip/Postal" className='w-full'>
                <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
            </Field>
          </div>

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


    
    {/* Delete account */}
    <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

      <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

        <h1 className="text-lg font-bold">Delete account</h1>

        <div className='space-y-4 border-t border-b border-gray-300 py-4'>

          <p>
              Are you sure you want to delete the account?
          </p>

          <Field label="Enter the account name to confirm">
              <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
          </Field>

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

export default DetailsView;
