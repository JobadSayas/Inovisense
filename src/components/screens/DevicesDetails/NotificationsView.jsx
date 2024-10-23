import React from 'react';

import Divider from '../../common/Divider';
import Filter from '../../common/Filter';
import DownloadButton from '../../common/DownloadButton';

const NotificationsView = ({  }) => {
  

  return (<>


    {/* Search/Filters */}
    <div className="flex justify-between items-center gap-2">

        {/* Search Input */}
        <div className="relative w-1/3">
            <input type="text" placeholder="Search" className="w-full bg-white border border-gray-300 h-9 pl-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>


        {/* Right side container */}
        <div className="flex gap-2 flex-nowrap">

            <Filter label="Status" value="All"></Filter>                  
            
            <Divider vertical />

            <DownloadButton/>

        </div>

    </div>

    <Divider horizontal/>
  
    <div class="max-md:w-full max-md:overflow-auto">
        <table class="w-full text-left border-collapse bg-white">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-2 px-4 font-bold">ID</th>
                    <th class="py-2 px-4 font-bold">Time</th>
                    <th class="py-2 px-4 font-bold">Trigger</th>
                    <th class="py-2 px-4 font-bold">Email</th>
                    <th class="py-2 px-4 font-bold">SMS</th>
                </tr>
            </thead>
            <tbody>
                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>

                <tr class="h-11 border-b border-gray-300">
                    <td class="py-2 px-4">0933b37b7cd8</td>
                    <td class="py-2 px-4">jul 26, 10:00 am</td>
                    <td class="py-2 px-4">Temperature below -10°</td>
                    <td class="py-2 px-4">mail@school.com, mail@school.com</td>
                    <td class="py-2 px-4">456-435-3546, 456-435-3546</td>
                </tr>
            </tbody>
        </table>
    </div>



  </>);
};

export default NotificationsView;