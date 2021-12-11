import React from 'react';
// import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef } from 'Navigators/Root';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeContainer from '@/Containers/Home';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  return (
    <AppearanceProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['right', 'top', 'left']}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeContainer} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default ApplicationNavigator;
