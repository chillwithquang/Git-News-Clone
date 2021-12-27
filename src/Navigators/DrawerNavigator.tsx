import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigatorParamsList } from '@/types';
import TabNavigator from './TabNavigator';
import SidebarContainer from '@/Containers/Sidebar';

const Drawer = createDrawerNavigator<DrawerNavigatorParamsList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}
      drawerContent={props => <SidebarContainer {...props} />}
      initialRouteName="Tabs"
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
