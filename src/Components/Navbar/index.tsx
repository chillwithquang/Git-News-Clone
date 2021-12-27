import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { VStack, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <Pressable onPress={handlePressMenuButton}>
      <VStack w="full" alignItems="flex-start" p={4}>
        <Icon as={FontAwesome5} name="bars" color="white" size="sm" />
      </VStack>
    </Pressable>
  );
};

export default Navbar;
