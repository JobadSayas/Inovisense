import { React, useState } from 'react'

import { Switch } from '@headlessui/react'

import Divider from '../../common/Divider';
import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';

import '../../../App.css';

const TriggeresView = ({  }) => {

    const [switchOn, setSwitchOn] = useState(true)

    return (<>


        <div className='space-y-4'>
        
            {/* Add new trigger button */}
            <button className="text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                <i class="fa-solid fa-plus mr-2"></i>
                <span>Add new trigger</span>
            </button>


            {/* Trigger container */}
            <div className=' space-y-5 edit-mode border-gray-300 border-t pt-4'>

                <div className="flex justify-between items-end gap-4">

                    <div className="flex-1"> 
                        {/* flex-1 allows this container to take the full remaining space */}
                        <Field label="Trigger name">
                            <input
                                className="py-2 rounded-md w-full sm:w-80" 
                                type="text" 
                                value="Name of the trigger" 
                            />
                        </Field>
                    </div>

                    <div className="flex gap-2">

                        <div className="edit-only flex gap-3">
                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-ban mr-2"></i>
                                <span>Cancel</span>
                            </button>

                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-check mr-2"></i>
                                <span>Save</span>
                            </button>
                        </div>

                        <div className="read-only flex gap-3">
                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-trash-can mr-2"></i>
                                <span>Delete</span>
                            </button>

                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-pen-to-square mr-2"></i>
                                <span>Edit</span>
                            </button>
                        </div>

                    </div>

                </div>


                {/* Conditions */}
                <h3 className='text-md'>When:</h3>

                <div className='flex flex-col space-y-2 ml-10'>

                    <div className="flex max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:hidden">

                        <label className="w-60 font-bold text-sm">Value</label>

                        <label className="w-60 font-bold text-sm">Condition</label>

                        <label className="w-60 font-bold text-sm">Parameter</label>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full ">

                        <Field label="Value" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Condition" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Paramter" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="text" value="Test"/>
                        </Field>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full">

                        <Field label="Value" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Condition" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Paramter" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="text" value="Test"/>
                        </Field>

                        <button className="edit-only w-8 h-8 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-200">
                            <i className="fa-solid fa-trash-can text-md"></i>
                        </button>

                    </div>

                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full">

                        <Field label="Value" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Condition" className="mobile-only">
                        <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Paramter" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="text" value="Test"/>
                        </Field>

                        <button className="edit-only w-8 h-8 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-200">
                            <i className="fa-solid fa-trash-can text-md"></i>
                        </button>

                    </div>


                    <div>
                        <button className="edit-only text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                            <i class="fa-solid fa-plus mr-2"></i>
                            <span>Add another condition</span>
                        </button>
                    </div>

                </div>


                {/* Notifigy by email or SMS */}
                <h3 className='text-md'>Then notify by:</h3>

                <div className='flex flex-col space-y-2 ml-10'>

                    <div className="flex gap-2 pr-10 max-lg:hidden">

                        <label className="w-60 font-bold text-sm">E-mail</label>

                        <label className="w-60 font-bold text-sm">SMS</label>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full">

                        <Field label="E-mail" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="email" value="test@mail.com"/>
                        </Field>

                        <Field label="SMS" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="phone" value="123-456-78-90"/>
                        </Field>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full">

                        <Field label="E-mail" className="mobile-only">   
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="email" value="test@mail.com"/>
                        </Field>   

                        <Field label="SMS" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="phone" value="123-456-78-90"/>
                        </Field>

                        <button className="edit-only w-8 h-8 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-200">
                            <i className="fa-solid fa-trash-can text-md"></i>
                        </button>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full">

                        <Field label="E-mail" className="mobile-only">   
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="email" value="test@mail.com"/>
                        </Field>

                        <Field label="SMS" className="mobile-only">   
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="phone" value="123-456-78-90"/>
                        </Field>

                        <button className="edit-only w-8 h-8 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-200">
                            <i className="fa-solid fa-trash-can text-md"></i>
                        </button>

                    </div>


                    <div>
                        <button className="edit-only text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                            <i class="fa-solid fa-plus mr-2"></i>
                            <span>Add another Email/Phone</span>
                        </button>
                    </div>

                </div>


                {/* Trigger enabled toggle */}
                <div className="flex items-center space-x-4">
                    <Switch
                        checked={switchOn}
                        onChange={setSwitchOn}
                        className={`${switchOn ? 'bg-blue-500' : 'bg-gray-400'}
                        relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                        <span
                        className={`${switchOn ? 'translate-x-6' : 'translate-x-1'}
                            inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                    </Switch>
                    <span>{switchOn ? 'Trigger enabled' : 'Trigger disabled'}</span>
                </div>

            </div>


            {/* Trigger container */}
            <div className=' space-y-5 read-mode border-gray-300 border-t pt-4'>

                <div className="flex justify-between items-end gap-4">

                    <div className="flex-1"> 
                        {/* flex-1 allows this container to take the full remaining space */}
                        <Field label="Trigger name">
                            <input
                                className="py-2 rounded-md w-full sm:w-80" 
                                type="text" 
                                value="Name of the trigger" 
                            />
                        </Field>
                    </div>

                    <div className="flex gap-2">

                        <div className="edit-only flex gap-3">
                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-ban mr-2"></i>
                                <span>Cancel</span>
                            </button>

                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-check mr-2"></i>
                                <span>Save</span>
                            </button>
                        </div>

                        <div className="read-only flex gap-3">
                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-trash-can mr-2"></i>
                                <span>Delete</span>
                            </button>

                            <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                                <i className="fa-solid fa-pen-to-square mr-2"></i>
                                <span>Edit</span>
                            </button>
                        </div>

                    </div>

                </div>


                {/* Conditions */}
                <h3 className='text-md'>When:</h3>

                <div className='flex flex-col space-y-2 ml-10'>

                    <div className="flex max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:hidden">

                        <label className="w-60 font-bold text-sm">Value</label>

                        <label className="w-60 font-bold text-sm">Condition</label>

                        <label className="w-60 font-bold text-sm">Parameter</label>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full ">

                        <Field label="Value" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Condition" className="mobile-only">
                            <SelectWrapper className='w-60 max-md:w-full'>
                                <select className='py-2 rounded-md w-full'>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </SelectWrapper>
                        </Field>

                        <Field label="Paramter" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="text" value="Test"/>
                        </Field>

                    </div>

                    <div>
                        <button className="edit-only text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                            <i class="fa-solid fa-plus mr-2"></i>
                            <span>Add another condition</span>
                        </button>
                    </div>

                </div>


                {/* Notifigy by email or SMS */}
                <h3 className='text-md'>Then notify by:</h3>

                <div className='flex flex-col space-y-2 ml-10'>

                    <div className="flex gap-2 pr-10 max-lg:hidden">

                        <label className="w-60 font-bold text-sm">E-mail</label>

                        <label className="w-60 font-bold text-sm">SMS</label>

                    </div>


                    <div className="flex lg:max-w-max gap-2 border-gray-300 border-b pb-2 max-lg:flex-col max-md:w-full">

                        <Field label="E-mail" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="email" value="test@mail.com"/>
                        </Field>

                        <Field label="SMS" className="mobile-only">
                            <input className='w-60 max-md:w-full py-2 rounded-md' type="phone" value="123-456-78-90"/>
                        </Field>

                    </div>

                    <div>
                        <button className="edit-only text-sm flex items-center bg-white hover:bg-gray-50 border border-gray-300 h-9 px-3 rounded-md whitespace-nowrap">
                            <i class="fa-solid fa-plus mr-2"></i>
                            <span>Add another Email/Phone</span>
                        </button>
                    </div>

                </div>


                {/* Trigger enabled toggle */}
                <div className="flex items-center space-x-4">
                    <Switch
                        checked={switchOn}
                        onChange={setSwitchOn}
                        className={`${switchOn ? 'bg-blue-500' : 'bg-gray-400'}
                        relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                        <span
                        className={`${switchOn ? 'translate-x-6' : 'translate-x-1'}
                            inline-block w-4 h-4 transform bg-white rounded-full`}
                        />
                    </Switch>
                    <span>{switchOn ? 'Trigger enabled' : 'Trigger disabled'}</span>
                </div>

            </div>


            {/* Delete trigger */}
            <div className='hidden bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

              <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>

                <h1 className="text-lg font-bold">Delete device</h1>


                <div className='space-y-4 border-t border-b border-gray-300 py-4'>

                    <p>
                        Are you sure you want to delete the trigger<br/>
                        <b>Temperature control</b>?
                    </p>

                    <Field label="Enter the trigger name to confirm">
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

    </>);
};

export default TriggeresView;