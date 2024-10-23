import React from 'react';

import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';
import Divider from '../../common/Divider';
import AppLogo from '../../../assets/inovisense-white.svg'

const PersonalDetailsView = ({ horizontal, vertical }) => {

  return (<>

    <h1 className="text-lg font-bold">Sign up</h1>

    <div className='space-y-4 border-t border-b border-gray-300 py-4'>

      <div className='text-center pt-2 pb-2 relative'>

        <div className='inline-flex flex-col items-center text-center mr-10'>
          <div className='w-7 h-7 flex items-center justify-center rounded-full  mb-1 bg-blue-100 border-2 border-blue-500'>
            1
          </div>
          <span className='text-xs'>Personal details</span>
        </div>

        <div className='inline-flex flex-col items-center text-center'>
          <div className='w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 mb-1'>
            2
          </div>
          <span className='text-xs'>Account details</span>
        </div>

        <div className='absolute border-t border-gray-500 w-[101px] top-[23px]' style={{left:"calc(50% - 50px)"}}></div>

      </div>


      <Field label="Full name">
        <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value=""/>
      </Field>

      <div className="w-full flex gap-4">

        <Field label="Country code" className="w-full">
          <SelectWrapper>
            <select className='border border-gray-400 px-2 py-[10px] rounded-md w-full'>
                <option>+1</option>
            </select>
          </SelectWrapper>
        </Field>

        <Field label="Phone number" className="w-full">
          <input className='border border-gray-400 p-2 rounded-md' type="text" value="Test"/>
        </Field>

      </div>

    </div>

    <div className="flex gap-2 justify-end">

      <button className="w-20 text-center text-sm bg-white hover:bg-gray-100 border border-gray-400 h-9 py-2 px-3 rounded-md whitespace-nowrap">
        Cancel
      </button>

      <button className="w-20 text-center text-sm focus:outline-none rounded-md border border-gray-400 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white py-2 px-3">
        Finish
      </button>

    </div>

  </>);
};

export default PersonalDetailsView;