import React from 'react';
import { Box, Text, useTheme, VStack } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamsList } from '@/types';
import HomeContainer from '@/Containers/Home';
import AboutContainer from '@/Containers/About';

const TabStack = createBottomTabNavigator<TabNavigatorParamsList>();

interface TabContainerProps {
  label?: string;
  focused?: boolean;
}

const TabContainer: React.FunctionComponent<TabContainerProps> = ({
  children,
  label,
  focused,
}) => (
  <>
    {focused ? (
      <VStack flex={1} space={2} borderTopWidth={2} borderTopColor="dark.700">
        <Box mt={1} alignItems="center">
          {children}
        </Box>
        <Text fontSize="md" color="teal.50" mt={-2}>
          {label}
        </Text>
      </VStack>
    ) : (
      <VStack flex={1} space={2}>
        <Box alignItems="center" mt={2}>
          {children}
        </Box>
        <Text fontSize="md" color="dark.300" mt={-2}>
          {label}
        </Text>
      </VStack>
    )}
  </>
);

const TabNavigator = () => {
  const { colors } = useTheme();

  const { Navigator, Screen } = TabStack;

  const screenOptions = ({ route }) => {
    return {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        backgroundColor: colors.dark['50'],
        borderTopColor: 'rgba(0, 0, 0, 0)',
      },
      tabBarIcon: ({ focused }) => {
        let label: string;
        let iconName: string;

        switch (route.name) {
          case 'Home':
            label = 'Home';
            iconName = 'home';
            break;
          case 'About':
            label = 'About';
            iconName = 'user';
            break;
          default:
            return null;
        }

        return (
          <TabContainer label={label} focused={focused}>
            <Icon
              name={iconName}
              color={focused ? colors.lightBlue['50'] : colors.dark['300']}
            />
          </TabContainer>
        );
      },
    };
  };
  return (
    <Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Screen name="Home" component={HomeContainer} />
      <Screen name="About" component={AboutContainer} />
    </Navigator>
  );
};

export default TabNavigator;
