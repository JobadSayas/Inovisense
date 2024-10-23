import React from 'react';

import AccountDetailsView from './AccountDetailsView';
import PersonalDetailsView from './PersonalDetailsView';
import backgroundImage from '../../../assets/onboarding-background.png'
import AppLogo from '../../../assets/inovisense-white.svg'

const OnBoardingScreen = ({ horizontal, vertical }) => {

  return (<>

    <div className='w-screen h-screen h-screen bg-no-repeat bg-cover bg-bottom bg-cyan-400' style={{ backgroundImage: `url(${backgroundImage})` }}>

      <div className='fixed z-50 top-0 left-0 w-screen h-screen flex flex-col items-center justify-center'>

        <img src={AppLogo} alt="Logo" className="w-[250px] mb-7" />

        <div className='w-[95%] max-w-[600px] p-4 bg-white space-y-4 rounded-lg shadow-lg'>
         
          {/* <PersonalDetailsView/> */}
          <AccountDetailsView/>

        </div>

      </div>

    </div>

  </>);
};

export default OnBoardingScreen;
