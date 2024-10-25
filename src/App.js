import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import TopBar from './components/common/TopBar'
import SideBar from './components/common/SideBar';
import ContentArea from './components/common/ContentArea';
import DevicesListScreen from './components/screens/DevicesList/DevicesListScreen';
import DeviceDetailsScreen from './components/screens/DevicesDetails/DeviceDetailsScreen';
import DashboardScreen from './components/screens/Dashboard/DashboardScreen';
import NotificationsListScreen from './components/screens/Notifications/NotificationsListScreen';
import NotificationDetails from './components/screens/Notifications/NotificationDetails';
import UsersListScreen from './components/screens/Users/UsersListScreen';
import UserDetailsScreen from './components/screens/Users/UserDetailsScreen';
import UserProfileScreen from './components/screens/UserProfile/UserProfileScreen';
import GatewaysListScreen from './components/screens/Gateways/GatewaysListScreen';
import SwitchAccount from './components/popups/SwitchAccount';
import AccountSettingsScreen from './components/screens/AccountSettings/AccountSettingsScreen';
import ManageDevices from './components/screens/AccountSettings/ManageDevices';
import OnBoardingScreen from './components/screens/OnBoarding/OnBoardingScreen';


function App() {
  // State to manage sidebar visibility
  const [sideBarVisible, setSideBarVisible] = useState(true);

  // Toggle function for sidebar visibility
  const toggleSideBar = () => {
    setSideBarVisible(prevState => !prevState);
  };

  return (<>
    <TopBar onToggleSideBar={toggleSideBar} />
      <SideBar visible={sideBarVisible} onLinkClick={toggleSideBar}/>
      <ContentArea>
        <Routes>
          <Route path="/" element={<DashboardScreen />} /> {/* Default Dashboard */}
          <Route path="/devices-list" element={<DevicesListScreen />} />
          <Route path="/device-details" element={<DeviceDetailsScreen />} />
          <Route path="/profile" element={<UserProfileScreen />} />
          <Route path="/account-settings" element={<AccountSettingsScreen />} />
          <Route path="/gateways-list" element={<GatewaysListScreen />} />
          <Route path="/notifications-list" element={<NotificationsListScreen />} />
          <Route path="/Notification-details" element={<NotificationDetails />} />
          <Route path="/users-list" element={<UsersListScreen />} />
          <Route path="/user-details" element={<UserDetailsScreen />} />

        </Routes>

        {/* <SwitchAccount/> */}
        
        {/* <DeviceDetailsScreen /> */}
        {/* <NotificationDetails/> */}
        {/* <UserDetailsScreen/> */}
      </ContentArea>
    {/* <OnBoardingScreen/> */}

  </>);
}

export default App;