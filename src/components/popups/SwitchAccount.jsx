import React from 'react';

import Divider from '../../components/common/Divider';

const SwitchAccount = ({ horizontal, vertical }) => {

    return (<>

        <div className=' bg-black bg-opacity-25 fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center'>

        <div className='w-[400px] p-4 bg-white space-y-4 rounded-lg shadow-lg relative'>

            <h1 className="text-lg font-bold">Swtich account</h1>

            <button class="absolute top-0 right-3 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100">
                <i class="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className='border-t border-gray-300'>

                <div className="flex space-x-2 items-center min-w-64 p-3 border-b border-gray-300">
                    <img src="https://placehold.co/40x40" alt="Placeholder" className="w-10 h-10 border border-gray-300 rounded-full" />
                    <div className="flex flex-grow flex-col justify-center relative">
                        <div className="text-base font-semibold">Yogi Solutions</div>
                        <i class="fa-solid fa-check absolute top-0 right-1 text-xl"></i>
                    </div>
                </div>

                <div className="flex space-x-2 items-center min-w-64 p-3 border-b border-gray-300">
                    <img src="https://placehold.co/40x40" alt="Placeholder" className="w-10 h-10 border border-gray-300 rounded-full" />
                    <div className="flex flex-grow flex-col justify-center relative">
                        <div className="text-base font-semibold">District B</div>
                        <i class="hidden fa-solid fa-check absolute top-0 right-1 text-xl"></i>
                    </div>
                </div>


            </div>
            
        </div>

        </div>


    </>);
};

export default SwitchAccount;
