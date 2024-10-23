import React from 'react';

import Field from '../../common/Field';

const PasswordView = ({ horizontal, vertical }) => {

  return (
  
    <div className='space-y-4'>
      
      <Field label="Current password">
        <input className='w-80 max-md:w-full py-2 px-2 rounded-md border border-gray-300 bg-white' type="text" value=""/>
      </Field>

      <Field label="New password">
        <input className='w-80 max-md:w-full py-2 px-2 rounded-md border border-gray-300 bg-white' type="text" value=""/>
      </Field>

      <Field label="Confirm password">
        <input className='w-80 max-md:w-full py-2 px-2 rounded-md border border-gray-300 bg-white' type="text" value=""/>
      </Field>

      <button className="text-sm flex items-center bg-white hover:bg-gray-200 border border-gray-300 p-3 py-2 rounded-md whitespace-nowrap">
          <span>Change password</span>
      </button>

    </div>

  );
};

export default PasswordView;