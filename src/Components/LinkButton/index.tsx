import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainNavigatorParamsList } from '@/types';
import { Button, IButtonProps } from 'native-base';

export interface Props extends IButtonProps {
  href: string;
}

const LinkButton = ({ href, ...props }: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<MainNavigatorParamsList>>();

  const handlePress = useCallback(() => {
    // Linking.openURL(href);
    return navigation.navigate('WebView', {
      uri: href,
    });
  }, [href, navigation]);

  return <Button {...props} onPress={handlePress} />;
};

export default React.memo(LinkButton);
