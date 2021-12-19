import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '@/themes';
import SplashContainer from '@/Containers/Splash';
import TabNavigator from './TabNavigator';
import { navigationRef } from './RootContainer';
import WebViewContainer from '@/Containers/WebView';

import {
  MainNavigatorParamsList,
  ApplicationNavigatorParamsList,
} from '@/types';

const MainStack = createStackNavigator<MainNavigatorParamsList>();
const ApplicationStack = createStackNavigator<ApplicationNavigatorParamsList>();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Tabs" component={TabNavigator} />
      <Screen name="Splash" component={SplashContainer} />
    </Navigator>
  );
};

const ApplicationNavigator: React.FC = () => {
  const { Navigator, Screen } = ApplicationStack;

  return (
    <AppearanceProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'top', 'left']}>
        <NavigationContainer ref={navigationRef}>
          <NativeBaseProvider theme={theme}>
            <Navigator screenOptions={{ headerShown: false }}>
              <Screen name="Main" component={MainNavigator} />
              <Screen name="WebView" component={WebViewContainer} />
            </Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default ApplicationNavigator;
