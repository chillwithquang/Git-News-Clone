import React, { useEffect } from 'react';
import { View, Text } from 'native-base';
import { useDispatch } from 'react-redux';
import { navigateAndSimpleReset } from '@/Navigators/RootContainer';

const SplashContainer = ({ navigation }) => {
  const dispatch = useDispatch();

  let timer = null;

  useEffect(() => {
    timer = setTimeout(() => {
      // dispatch(navigateAndSimpleReset('Main'));
      navigation.navigate('Tabs');
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View>
      <Text> splash container</Text>
    </View>
  );
};

export default SplashContainer;
