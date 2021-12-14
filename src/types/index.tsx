import { NavigatorScreenParams } from '@react-navigation/native';

export type MainNavigatorParamsList = {
  Splash: undefined;
  Tabs: undefined;
};

export type TabNavigatorParamsList = {
  Home: undefined;
  About: undefined;
};
export type ApplicationNavigatorParamsList = {
  Main: NavigatorScreenParams<MainNavigatorParamsList>;
};
