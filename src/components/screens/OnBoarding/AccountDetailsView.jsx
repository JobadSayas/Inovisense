import React from 'react';

import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';
import Divider from '../../common/Divider';

const PersonalDetailsView = ({ horizontal, vertical }) => {

  return (<>

    <h1 className="text-lg font-bold">Sign up</h1>

    <div className='space-y-4 border-t border-b border-gray-300 py-4'>

      <div className='text-center pt-2 pb-2 relative'>
        
        <div className='inline-flex flex-col items-center text-center mr-10'>
          <div className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white mb-1'>
            <i class="fa-solid fa-check"></i>
          </div>
          <span className='text-xs'>Personal details</span>
        </div>

        <div className='inline-flex flex-col items-center text-center'>
          <div className='w-7 h-7 flex items-center justify-center rounded-full  mb-1 bg-blue-100 border-2 border-blue-500'>
            2
          </div>
          <span className='text-xs'>Account details</span>
        </div>

        <div className='absolute border-t border-gray-500 w-[100px] top-[23px]' style={{left:"calc(50% - 50px)"}}></div>

      </div>


      <Field label="Account name">
        <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
      </Field>

      <Divider horizontal/>

      <Field label="Address">
        <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value="Test"/>
      </Field>

      <div className="w-full flex gap-4">

        <Field label="City" className="w-full">
          <input className='border border-gray-400 p-2 rounded-md' type="text" value="Test"/>
        </Field>

        <Field label="State" className="w-full">
          <SelectWrapper>
            <select className='border border-gray-400 px-2 py-[10px] rounded-md w-full'>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
          </SelectWrapper>
        </Field>

      </div>

      <div className="w-full flex gap-4">

        <Field label="Country" className="w-full">
          <SelectWrapper>
            <select className='border border-gray-400 px-2 py-[10px] rounded-md w-full'>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
          </SelectWrapper>
        </Field>

        <Field label="ZIP code" className="w-full">
          <input className='border border-gray-400 p-2 rounded-md' type="text" value="Test"/>
        </Field>

      </div>

    </div>

    <div className="flex gap-2 justify-end">

      <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
        Cancel
      </button>

      <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white py-2 px-3">
        Next
      </button>

    </div>

  </>);
};

export default PersonalDetailsView;