import React from 'react';

const SuscriptionsView = ({ }) => {

  return (<>

    <h2 className='text-lg font-bold mb-4'>Plans</h2>

    <div class="grid gap-4 
                max-sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3"
    >

      <div className='flex flex-col bg-white p-4 min-w-36 border border-gray-300 rounded-lg relative border-2 border-blue-500'>
        <h3 className='text-lg font-bold mb-2'>Free</h3>
        <ul className='list-disc pl-5 text-md'>
          <li>Benefir one</li>
          <li>Benefir two</li>
          <li>Benefir three</li>
          <li>Benefir four</li>
          <li>Benefir five</li>
          <button className='absolute top-2 right-2 border py-1 px-3 rounded-lg bg-blue-500 text-white cursor-default'>Current plan</button>
        </ul>
      </div>

      <div className='flex flex-col bg-white p-4 min-w-36 border border-gray-300 rounded-lg relative'>
        <h3 className='text-lg font-bold mb-2'>Paid</h3>
        <ul className='list-disc pl-5 text-md'>
          <li>Benefir one</li>
          <li>Benefir two</li>
          <li>Benefir three</li>
          <li>Benefir four</li>
          <li>Benefir five</li>
          <li>Benefir six</li>
          <button className='absolute top-2 right-2 border py-1 px-3 rounded-lg border-gray-300 hover:bg-gray-100'>Switch tho this plan</button>
        </ul>
      </div>

      <div className='flex flex-col bg-white p-4 min-w-36 border border-gray-300 rounded-lg relative'>
        <h3 className='text-lg font-bold mb-2'>Enterprice</h3>
        <ul className='list-disc pl-5 text-md'>
          <li>Benefir one</li>
          <li>Benefir two</li>
          <li>Benefir three</li>
          <li>Benefir four</li>
          <li>Benefir five</li>
          <li>Benefir six</li>
          <li>Benefir seven</li>
          <button className='absolute top-2 right-2 border py-1 px-3 rounded-lg border-gray-300 hover:bg-gray-100'>Switch tho this plan</button>
        </ul>
      </div>
    
    </div>
    

  </>);
};

export default SuscriptionsView;