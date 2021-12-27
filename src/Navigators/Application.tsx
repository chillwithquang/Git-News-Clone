import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '@/themes';
import { navigationRef } from './RootContainer';
import DrawerNavigator from './DrawerNavigator';
import { MainNavigatorParamsList } from '@/types';
import SplashContainer from '@/Containers/Splash';
import WebViewContainer from '@/Containers/WebView';

const MainStack = createStackNavigator<MainNavigatorParamsList>();

const MainNavigator = () => {
  const { Navigator, Screen } = MainStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Drawer" component={DrawerNavigator} />
      <Screen name="WebView" component={WebViewContainer} />
    </Navigator>
  );
};

const ApplicationNavigator: React.FC = () => {
  return (
    <AppearanceProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'top', 'left']}>
        <NavigationContainer ref={navigationRef}>
          <NativeBaseProvider theme={theme}>
            <MainNavigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default ApplicationNavigator;
