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
      <SideBar visible={sideBarVisible} />
      <ContentArea>
        <Routes>
          <Route path="/" element={<DashboardScreen />} /> {/* Default Dashboard */}
          <Route path="/devices" element={<DevicesListScreen />} />
          <Route path="/profile" element={<UserProfileScreen />} />
          <Route path="/account-settings" element={<AccountSettingsScreen />} />
          <Route path="/gateways" element={<GatewaysListScreen />} />
          <Route path="/notifications" element={<NotificationsListScreen />} />
          <Route path="/users" element={<UsersListScreen />} />
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