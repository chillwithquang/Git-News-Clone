import React, { useCallback } from 'react';
import {
  IconButton,
  Heading,
  HStack,
  VStack,
  Avatar,
  useColorModeValue,
} from 'native-base';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AnimatedColorBox from '@/Components/AnimatedColorBox';
import MenuButton from '@/Components/MenuButton';

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const tabRoute = state.routes[0];

  let currentRoute = 'Home';
  if (tabRoute && tabRoute.state) {
    currentRoute = tabRoute.state.routeNames[tabRoute.state.index];
  }

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('darkBlue.800', 'blue.50')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: FontAwesome5,
              name: 'chevron-left',
              size: 5,
              color: 'blue.800',
            }}
          />
        </HStack>
        <Avatar
          source={require('../../Assets/robot.jpg')}
          size="xl"
          borderRadius="100"
          borderColor="secondary.500"
          borderWidth={3}
        />
        <Heading mb={4} size="xl" color="lightText">
          Quang Huynh
        </Heading>
        <MenuButton
          active={currentRoute === 'Home'}
          onPress={handlePressMenuMain}
          icon="home"
        >
          Home
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="address-card"
        >
          About
        </MenuButton>
      </VStack>
    </AnimatedColorBox>
  );
};

export default Sidebar;
