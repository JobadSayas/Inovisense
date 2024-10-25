import React from 'react';
import AppLogo from '../../assets/inovisense-logo.svg'
import ProfileDisplay from './ProfileDisplay';
import NotificationsPopOver from '../screens/Notifications/NotificationsPopOver';


const TopBar = ({ onToggleSideBar }) => {
  
  // Toggle profile display
  const [profileDisplayVisible, setProfileDisplayVisible] = React.useState(false);

  const handleDisplayProfile = () => {
    setProfileDisplayVisible(prevState => !prevState);
  };
  
  // Toggle notification display
  const [notificationDisplayVisible, setNotificationDisplayVisible] = React.useState(false);

  const handleDisplayNotification = () => {
    setNotificationDisplayVisible(prevState => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white h-16 border-b border-gray-300 flex items-center justify-between px-4 z-50">

      <div className="flex items-center gap-2">
        <button
          id="burger-btn"
          className="xl:hidden w-9 h-9 text-gray-800 rounded-full flex items-center justify-center focus:outline-none hover:bg-gray-100"
          onClick={onToggleSideBar} // Call toggle function
        >
          <i className="fa-solid fa-bars text-lg"></i>
        </button>
        {/* Logo */}
        <img src={AppLogo} alt="Logo" className="h-6" />
      </div>
      
      {/* Right side container */}
      <div className="flex space-x-2 items-center">

        {/* Notifications */}
        <button 
          onClick={handleDisplayNotification}
          className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center focus:outline-none hover:bg-blue-200">
          <i className="fa-solid fa-bell"></i>
        </button>

        {notificationDisplayVisible && <NotificationsPopOver />}

        {/* Profile */}
        <button
          id="profile-btn"
          onClick={handleDisplayProfile}
          className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg py-1 px-3 ml-4 "
        >
          <span className="max-lg:hidden">User Name</span>
          <img src="https://placehold.co/40x40" alt="Placeholder" className="w-10 h-10 border border-gray-300 rounded-full" />
          <i className="fa-solid fa-caret-down"></i>
        </button>

        {profileDisplayVisible && <ProfileDisplay />}

      </div>

    </div>
  );
};

export default TopBar;
