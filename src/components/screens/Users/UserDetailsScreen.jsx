import { React, useState } from 'react'
import { Link } from 'react-router-dom';

import { Switch } from '@headlessui/react'

import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';
import Tag from '../../common/Tag';
import Divider from '../../common/Divider';

const UserProfileScreen = ({  }) => {

  const [switchOn, setSwitchOn] = useState(true)  

  return (
  <div className='read-mode'>

    {/* Header */}
    <div className="flex justify-between items-start mb-4 relative max-sm:mb-6">
              
      <div className='flex gap-3 justify-center items-center max-sm:flex-col max-sm:items-start'>
          <Link to="/users-list" className="text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap ">
            <i className="fa-solid fa-chevron-left mr-2"></i>
            <span>Back</span>
          </Link>

          <header className="text-2xl font-bold">Add user</header> 
      </div>

      <div className="flex gap-2">

        <div className="edit-only flex gap-3">
            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 px-3 rounded-md whitespace-nowrap">
                <i className="fa-solid fa-ban mr-2"></i>
                <span>Cancel</span>
            </button>

            <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                <i className="fa-solid fa-check mr-2"></i>
                <span>Save</span>
            </button>
        </div>

        <div className="read-only flex gap-3">
            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 px-3 rounded-md whitespace-nowrap">
                <i className="fa-solid fa-trash-can mr-2"></i>
                <span>Delete</span>
            </button>

            <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                <i className="fa-solid fa-pen-to-square mr-2"></i>
                <span>Edit</span>
            </button>
        </div>

      </div>
        
    </div>

    <div className="flex flex-col gap-4">
      
        <Field label="Name">
            <input className='w-80 max-md:w-full py-2 rounded-md' type="text" value=""/>
        </Field>

        <Field label="Email">
            <input className='w-80 max-md:w-full py-2 rounded-md' type="text" value=""/>
        </Field>

        <div className='flex gap-2 w-80 max-md:w-full'>
            <Field label="Country code">
                <input className='w-[95px] max-md:w-full py-2 rounded-md' type="text" value="+1"/>
            </Field>

            <Field label="Phone number" className='flex-grow'>
                <input className='py-2 rounded-md' type="text" value=""/>
            </Field>
        </div>

        <Field label="Role">
            <SelectWrapper className='w-80 max-md:w-full'>
                <select className='py-2 rounded-md w-full'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </SelectWrapper>
        </Field>


      {/* Trigger enabled toggle */}
      <div className='space-y-1'>
        <label className="font-bold text-sm">Status</label>
        <div className="flex items-center">
            <span className='edit-only'>
              <Switch
                checked={switchOn}
                onChange={setSwitchOn}
                className={`${switchOn ? "bg-blue-500" : "bg-gray-400"}
                  relative inline-flex items-center h-6 rounded-full w-11 mr-2`}
                >
                <span
                    className={`${switchOn ? "translate-x-6" : "translate-x-1"}
                    inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
              </Switch>
            </span>
            <span>{switchOn ? "Active" : "Deactived"}</span>
        </div>
      </div>
      


      <Divider horizontal/>

      <Field label="Location">
        <SelectWrapper className="w-[700px] max-md:w-full">
            <div className="tag-holder flex flex-wrap gap-2 py-2 pr-8 rounded-md w-full"> 
              <Tag>Room 8</Tag>
            </div>
        </SelectWrapper>
      </Field>


      <div className='relative'>

        <Field label="Site">
          <SelectWrapper className="w-[700px] max-md:w-full">
            <div className="tag-holder flex flex-wrap gap-2 py-2 pr-8 rounded-md w-full">
              <Tag>Site 1</Tag>
            </div>
          </SelectWrapper>
        </Field>

        <div className='hidden absolute z-10 border border-gray-300 rounded-md flex flex-col bg-white shadow-lg p-3 w-[700px]'>

          <div class="hover:bg-gray-100 p-2 text-gray-700 cursor-pointer">University of Florida</div>
          <div class="hover:bg-gray-100 p-2 text-gray-700 cursor-pointer">University of Houston</div>

          <button className="self-start w-auto text-sm flex items-center bg-white hover:bg-gray-100 border border-gray-400 h-9 px-3 rounded-md whitespace-nowrap mt-2">
              <i className="fa-solid fa-plus mr-2"></i>
              <span>Add Site</span>
          </button>

        </div>

      </div>


      <div className='relative'>

        <Field label="Group">
          <SelectWrapper className="w-[700px] max-md:w-full">
            <div className="tag-holder flex flex-wrap gap-2 py-2 pr-8 rounded-md w-full">
              <Tag>Group one</Tag><Tag>Group three</Tag>
            </div>
          </SelectWrapper>
        </Field>

        <div className='hidden absolute z-10 border border-gray-300 rounded-md flex flex-col gap-4 bg-white shadow-lg p-3 w-[700px]'>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-1" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-1" class="text-gray-700 cursor-pointer">Group one</label>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-2" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-2" class="text-gray-700 cursor-pointer">Group two</label>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-3" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-3" class="text-gray-700 cursor-pointer">Group three</label>
          </div>

          <button className="self-start w-auto text-sm flex items-center bg-white hover:bg-gray-100 border border-gray-400 h-9 px-3 rounded-md whitespace-nowrap">
              <i className="fa-solid fa-plus mr-2"></i>
              <span>Add Group</span>
          </button>

        </div>

      </div>


      <div className='relative'>

        <Field label="Tags">
          <SelectWrapper className="w-[700px] max-md:w-full">
            <div className="tag-holder flex flex-wrap gap-2 py-2 pr-8 rounded-md w-full">
              <Tag>Tag one</Tag><Tag>Tag four</Tag>
            </div>
          </SelectWrapper>
        </Field>

        <div className='hidden absolute z-10 border border-gray-300 rounded-md flex flex-col gap-4 bg-white shadow-lg p-3 w-[700px]'>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-1" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-1" class="text-gray-700 cursor-pointer">Tag one</label>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-2" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-2" class="text-gray-700 cursor-pointer">Tag two</label>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-3" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-3" class="text-gray-700 cursor-pointer">Tag three</label>
          </div>

          <div class="flex items-center gap-2">
            <input type="checkbox" id="checkbox-4" class="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded cursor-pointer" />
            <label for="checkbox-4" class="text-gray-700 cursor-pointer">Tag four</label>
          </div>

          <button className="self-start w-auto text-sm flex items-center bg-white hover:bg-gray-100 border border-gray-400 h-9 px-3 rounded-md whitespace-nowrap">
              <i className="fa-solid fa-plus mr-2"></i>
              <span>Add tag</span>
          </button>

        </div>

      </div>




    </div>


    {/* Delete user */}
    <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

      <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

        <h1 className="text-lg font-bold">Delete device</h1>


        <div className='space-y-4 border-t border-b border-gray-300 py-4'>

          <p>
              Are you sure you want to delete the device?
          </p>

          <Field label="Enter the device name to confirm">
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

  </div>
  );
};

export default UserProfileScreen;
