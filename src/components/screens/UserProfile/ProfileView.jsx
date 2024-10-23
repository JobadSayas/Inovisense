import React from 'react';

import Tag from '../../common/Tag';
import Field from '../../common/Field';
import SelectWrapper from '../../common/SelectWrapper';
import Divider from '../../common/Divider';

const ProfileView = ({ horizontal, vertical }) => {

    return (

        <div className='edit-mode'>

            <div className="flex gap-2 md:float-right mb-4 justify-end">

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
                    <button className="flex items-center p-3 py-2 text-sm focus:outline-none rounded-md border border-gray-300 hover:bg-blue-600 whitespace-nowrap bg-blue-500 text-white">
                        <i className="fa-solid fa-pen-to-square mr-2"></i>
                        <span>Edit</span>
                    </button>
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

        </div>

    );
};

export default ProfileView;