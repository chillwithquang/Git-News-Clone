import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainNavigatorParamsList = {
  Drawer: undefined;
  WebView: { uri: string } | undefined;
};

export type TabNavigatorParamsList = {
  Home: undefined;
  About: undefined;
};

export type DrawerNavigatorParamsList = {
  Tabs: undefined;
};

export type ApplicationNavigatorParamsList = {
  Main: NavigatorScreenParams<MainNavigatorParamsList>;
};

export type WebViewProps = StackScreenProps<MainNavigatorParamsList, 'WebView'>;
