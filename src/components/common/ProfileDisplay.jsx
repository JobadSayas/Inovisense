import React from 'react';

const ProfileDisplay = ({ visible }) => {

  return (

    <div id="profile-display" className={`absolute top-16 right-3 bg-white border border-t-0 border-gray-300 shadow-lg min-w-64 w-auto
        ${!visible ? 'hidden' : ''}
    `}>

        <div className="flex space-x-2 items-center p-3 pb-2 border-gray-300">
            <img src="https://placehold.co/40x40" alt="Placeholder" className="w-10 h-10 border border-gray-300 rounded-full" />
            <div className="flex flex-grow flex-col justify-center">
                <div className="text-base font-semibold">Robert Lewis</div>
                <div>robert.lewis@gmail.com</div>
            </div>
        </div>
        
        <div className="flex flex-grow flex-col justify-center">
            <a className="py-3 px-4 hover:bg-gray-100" href="#"><i className="fa-solid fa-user mr-2"></i> My profile</a>
            <a className="py-3 px-4 hover:bg-gray-100" href="#"><i className="fa-solid fa-list-ul mr-2"></i> Activity log</a>
        </div>

        <div className="flex space-x-2 items-center min-w-64 p-3 pb-2 border-t border-gray-300">
            <img src="https://placehold.co/40x40" alt="Placeholder" className="w-10 h-10 border border-gray-300 rounded-full" />
            <div className="flex flex-grow flex-col justify-center">
                <div className="text-base font-semibold">Yogi Solutions</div>
            </div>
        </div>

        <div className="flex flex-grow flex-col justify-center">
            <a className="py-3 px-4 hover:bg-gray-100" href="#"><i className="fa-solid fa-gear mr-2"></i> Account settings</a>
            <a className="py-3 px-4 hover:bg-gray-100" href="#"><i className="fa-solid fa-repeat mr-2"></i> Swith account</a>
            <a className="py-3 px-4 hover:bg-gray-100" href="#"><i className="fa-solid fa-plus mr-2"></i> Add account</a>
        </div>

        <div className="flex flex-grow flex-col justify-center border-t border-gray-300">
            <a className="py-3 px-4 hover:bg-gray-100" href="#"><i className="fa-solid fa-right-from-bracket mr-2"></i> Sign out</a>
        </div>

    </div>

  );
};

export default ProfileDisplay;