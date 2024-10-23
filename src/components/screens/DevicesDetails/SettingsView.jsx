import { React, useState } from 'react'

import { Switch } from '@headlessui/react'

import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';
import Tag from '../../common/Tag';
import Divider from '../../common/Divider';

const SettingsView = ({  }) => {

  const [switchOn, setSwitchOn] = useState(true)
  

  return (<>

            <div className="flex flex-col gap-4">
              <Field label="Upload interval">
                <SelectWrapper className="w-[700px] max-md:w-full">
                  <select className="p-2 rounded-md w-full border border-gray-300 bg-white">
                    <option>--</option>
                    <option>10 mins</option>
                    <option>25 mins</option>
                    <option>45 mins</option>
                    <option>1 hour</option>
                    <option>2 hour</option>
                    <option>24 hour</option>
                  </select>
                </SelectWrapper>
              </Field>


              {/* Trigger enabled toggle */}
              <div className="flex items-center space-x-4">
                <Switch
                  checked={switchOn}
                  onChange={setSwitchOn}
                  className={`${switchOn ? "bg-blue-500" : "bg-gray-400"}
                  relative inline-flex items-center h-6 rounded-full w-11`}
                >
                  <span
                    className={`${switchOn ? "translate-x-6" : "translate-x-1"}
                      inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </Switch>
                <span>{switchOn ? "Device enabled" : "Device disabled"}</span>
              </div>


              <Field label="Location">
                <SelectWrapper className="w-[700px] max-md:w-full">
                  <div className="p-2 rounded-md w-full border border-gray-300 bg-white">
                    Test
                  </div>
                </SelectWrapper>
              </Field>


              <div className='relative'>

                <Field label="Site">
                  <SelectWrapper className="w-[700px] max-md:w-full">
                    <div className="p-2 rounded-md w-full border border-gray-300 bg-white">
                      Test
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
                    <div className="flex flex-wrap gap-2 p-2 pr-8 rounded-md w-full border border-gray-300 bg-white">
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
                    <div className="flex flex-wrap gap-2 p-2 pr-8 rounded-md w-full border border-gray-300 bg-white">
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


              <div className="border-t-2 border-red-500 border-gray-300 mb-4"></div>


              <h3 className='font-bold text-lg'>Danger zone</h3>

              <button className="self-start w-auto flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-red-600 whitespace-nowrap bg-red-500 text-white">
                <i className="fa-solid fa-trash-can mr-2"></i> Delete device
              </button>

              <div>If you delete this device you will lose all the data. You can always add it back later as a new device</div>
            </div>


            

            {/* Add Tag popup */}
            <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

              <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Add new tag</h1>


                <div className='space-y-4 border-t border-b border-gray-300 py-4'>

                  <Field label="Tag name">
                    <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value="Test"/>
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



            {/* Add location popup */}
            <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

              <div className='w-[600px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Add new location</h1>


                <div className='space-y-4 border-t border-b border-gray-300 py-4'>

                  <Field label="Site name">
                    <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value="Test"/>
                  </Field>

                  <Field label="Address">
                    <input className='w-full border border-gray-400 max-md:w-full p-2 rounded-md' type="text" value="Test"/>
                  </Field>

                  <div className="w-full flex gap-4">

                    <Field label="City" className="w-full">
                      <input className='border border-gray-400 p-2 rounded-md' type="text" value="Test"/>
                    </Field>

                    <Field label="State" className="w-full">
                      <SelectWrapper>
                        <select className='border border-gray-400 py-2 rounded-md w-full'>
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
                        <select className='border border-gray-400 py-2 rounded-md w-full'>
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
                    Save
                  </button>

                </div>
                
              </div>

            </div>


            {/* Delete device */}
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




  </>);
};

export default SettingsView;
