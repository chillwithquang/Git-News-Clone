import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainNavigatorParamsList = {
  Splash: undefined;
  Tabs: undefined;
};

export type TabNavigatorParamsList = {
  Home: undefined;
  About: undefined;
};

export type HomeNavigatorParamsList = {
  HomeView: undefined;
  WebView: { uri: string } | undefined;
};

export type ApplicationNavigatorParamsList = {
  Main: NavigatorScreenParams<MainNavigatorParamsList>;
  WebView: { uri: string } | undefined;
};

export type WebViewProps = StackScreenProps<
  ApplicationNavigatorParamsList,
  'WebView'
>;
