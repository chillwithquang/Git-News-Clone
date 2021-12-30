import React, { useEffect } from 'react';
import { Box } from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import { navigateAndSimpleReset } from '@/Navigators/RootContainer';
import FastImage from '@/Components/Image';

const SplashContainer = () => {
  useEffect(() => {
    let timer;

    SplashScreen.hide();

    timer = setTimeout(() => {
      // dispatch(navigateAndSimpleReset('Main'));
      navigateAndSimpleReset('Drawer');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box flex={1}>
      <FastImage
        source={require('../../Assets/splash-screen.jpg')}
        size="full"
        resizeMode="cover"
      />
    </Box>
  );
};

export default SplashContainer;
